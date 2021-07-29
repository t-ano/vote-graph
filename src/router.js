import Vue from "vue";
import Router from "vue-router";
import Vote from './components/Vote.vue';
import Done from './components/Done.vue';
import Result from './components/Result.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Questions from './components/Questions.vue';
import editQuestion from './components/editQuestion.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'vote', component: Vote },
    { path: '/done', name: 'done', component: Done },
    { path: '/result', name: 'result', component: Result },
    { path: '/register', name: 'register', component: Register },
    { path: '/login', name: 'login', component: Login },
    { path: '/questions', name: 'questions', component: Questions },
    { path: '/editQuestion/:id', name: 'editQuestion', component: editQuestion },
  ]
});