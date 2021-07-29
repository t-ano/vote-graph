import Vue from "vue";
import Vuex from "vuex";
import router from "./router";
import firebase from "firebase/app";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: [],
    loginUser: null,
  },
  mutations: {
    fetchQuestions(state, snapshot) {
      state.questions.length = 0;
      snapshot.forEach(doc => {
        state.questions.push({ id: doc.id, question: doc.data() });
      });
    },
    addQuestion(state, question) {
      state.questions.push(question);
    },
    editQuestion(state, { id, question }) {
      state.questions[id] = question;
      router.push({ name: 'questions' });
    },
    deleteQuestion(state, id) {
      state.questions = state.questions.filter(question => {
        return question.id !== id
      });
    }
  },
  actions: {
    fetchQuestions({ commit }) {
      firebase.firestore().collection('question').onSnapshot(snapshot => {
        // console.log( snapshot.docChanges()[0].type );
        if (snapshot.docChanges()[0].type === "added") {
          snapshot.forEach(doc => {
            commit('addQuestion', { id: doc.id, question: doc.data() });
          });
        }
        if (snapshot.docChanges()[0].type === "modified") {
            commit('fetchQuestions', snapshot);
        }
      });
    },
    addQuestion({ state }, question) {
      firebase.firestore().collection('question').add(question).then(() => {
        // commit('addQuestion', { id: doc.id, question });
        state.questions = [];
        router.push({ name: 'questions' });
      });
    },
    editQuestion({ commit }, { id, question }) {
      firebase.firestore().collection('question').doc(id).update(question).then(() => {
        commit('editQuestion', { id, question });
      });
    },
    deleteQuestion({ commit }, id) {
      firebase.firestore().collection('question').doc(id).delete().then(() => {
        commit('deleteQuestion', id);
      });
    },
    addAnswer(state, answer) {
      const batch = firebase.firestore().batch();
      answer.forEach(ans => {
        const ansArr = ans.split('_');
        const docRef = firebase.firestore().collection('question').doc(ansArr[1]);
        if (ansArr[0] === "yes") {
          batch.update(docRef, { yes: firebase.firestore.FieldValue.increment(1) });
        } else if (ansArr[0] === "no") {
          batch.update(docRef, { no: firebase.firestore.FieldValue.increment(1) });
        }
      });
      batch.commit().then(() => {
        router.push('done');
      });
    },
    register(context, authData) {
      firebase.auth().createUserWithEmailAndPassword(authData.email, authData.pass);
      router.push({ name: 'login'}, () => {});
    },
    login(context, authData) {
      firebase.auth().signInWithEmailAndPassword(authData.email, authData.pass);
      router.push('questions');
    }
  },
  getters: {
    getQuestionById: (state) => (id) => {
      return state.questions.find(question => question.id === id);
    },
    getAnswers: (state) => {
      let answers = [];
      state.questions.forEach(item => { 
        let answer = {
          content: item.question.content,
          yes: item.question.yes,
          no: item.question.no
        }
        answers.push(answer);
      });
      return answers;
    }
  }
});