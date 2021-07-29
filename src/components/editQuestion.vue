<template>
  <div class="container mt-3">
    <h3>アンケート内容編集</h3>
    <textarea class="form-control my-3" cols="50" rows="3" v-model="doc.question.content"></textarea>
    <div class="mt-3">
      <button class="btn btn-outline-primary mx-2" @click="editQuestion">登録</button>
      <button class="btn btn-outline-secondary mx-2" @click="back">戻る</button>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    if (this.$route.params.id) {
      this.doc = this.$store.getters.getQuestionById(this.$route.params.id);
    } else {
      this.doc = { question: { content: '' } };
    }
  },
  data() {
    return { doc: null }
  },
  methods: {
    editQuestion() {
      if (this.$route.params.id) {
        this.$store.dispatch('editQuestion', { 
          id: this.$route.params.id,
          question: this.doc.question
        });
      } else {
        this.$store.dispatch('addQuestion', { 
          content: this.doc.question.content,
          yes: 0,
          no: 0
        });
      }
    },
    back() {
      this.$store.state.questions = [];
      this.$router.replace({ name: 'questions' });
    }
  }
}
</script>

<style scoped>
  .contain {
    width: 600px;
    margin: 0 auto;
  }
</style>