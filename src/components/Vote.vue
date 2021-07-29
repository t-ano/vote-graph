<template>
  <div class="container mt-3">
    <h3>アンケート回答</h3>
    <div>
      <div v-for="(item, index) in $store.state.questions" :key="index" class="my-3">
        <b>質問内容{{ index + 1 }}</b>
        <p class="mb-1 p-1">{{ item.question.content }}</p>
        <b>回答</b>
        <div class="d-flex">
          <div class="form-check mx-3 ">
            <input class="form-check-input" :id="'yes' + index" type="radio" :value="'yes_' + item.id" v-model="answer[index]">
            <label class="form-check-label" :for="'yes' + index">
              Yes
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" :id="'no' + index" type="radio" :value="'no_' + item.id" v-model="answer[index]">
            <label class="form-check-label" :for="'no' + index">
              No
            </label>
          </div>
        </div>
      </div>
      <input type="submit" value="送信" @click="send" class="btn btn-primary">
      <div v-show="message">
        <p class="error">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  created() {
    if (this.$store.state.questions.length === 0) this.fetchQuestions();
  },
  data() {
    return { 
      answer: [],
      message: ''
    }
  },
  methods: {
    send() {
      if (this.answer.length === 0) {
        this.message = '回答を選んでください。';
      } else {
        this.$store.dispatch('addAnswer', this.answer);
      }
    },
    ...mapActions(['fetchQuestions'])
  }
}

</script>

<style scoped>
  .error {
    color: orangered;
  }
</style>