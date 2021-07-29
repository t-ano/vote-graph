<template>
  <div class="container mt-3">
    <h3>アンケート管理</h3>
    <Menu/>
    <div>
      <div class="text-right">
        <router-link class="btn btn-outline-primary mb-1" :to="{ name: 'editQuestion', params: { id: 0 } }">新規登録</router-link>
      </div>
      <table class="table mx-auto" style="border-collapse: collapse">
        <tr>
          <th>No</th>
          <th>内容</th>
          <th></th>
        </tr>
        <tr v-for="(item, index) in $store.state.questions" :key="index">
          <td>
            {{ index + 1 }}
          </td>
          <td>
            {{ item.question.content }}
          </td>
          <td>
            <router-link class="btn btn-outline-primary mx-2" :to="{ name: 'editQuestion', params: { id: item.id } }">編集</router-link>
            <button class="btn btn-outline-secondary mx-2" @click="deleteQuestion(item.id)">削除</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Menu from './Menu';
import { mapActions } from 'vuex';

export default {
  data() {
    return { 
      questions: ''
    }
  },
  mounted() {
    if (this.$store.state.questions.length === 0) this.fetchQuestions();
    this.questions = this.$store.state.questions;
  },
  methods: {
    deleteQuestion(id) {
      if (!confirm('削除しますか？')) return;
      this.$store.dispatch('deleteQuestion', id);
    },
    ...mapActions(['fetchQuestions'])
  },
  components: {
    Menu
  }
}
</script>
