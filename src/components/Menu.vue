<template>
  <nav class="nav nav-pills nav-fill col-md-8 col-lg-6 mx-auto my-5 rounded">
    <div class="nav-item">
      <router-link :class="classObject1" to="/questions">アンケート管理</router-link>
    </div>
    <div class="nav-item">
      <router-link :class="classObject2" to="/result">回答結果</router-link>
    </div>
    <div class="nav-item">
      <a class="nav-link" style="cursor:pointer;" @click="logout" v-if="$store.state.loginUser">ログアウト</a>
    </div>
  </nav>
</template>

<script>
import firebase from "firebase/app";

export default {
  data() {
    return {
      isLink: true,
    }
  },
  computed: {
    // アクティブメメニュー切り替え
    classObject1() {
      return {
        'nav-link': this.isLink,
        active: this.$route.name === 'questions'
      }
    },
    classObject2() {
      return {
        'nav-link': this.isLink,
        active: this.$route.name === 'result'
      }
    }
  },
  mounted() {
    // ログイン状態のチェック
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.state.loginUser = user;
        if (this.$route.name === 'login') {
          this.$router.replace('questions');
        }
      } else {
        this.$store.state.loginUser = null;
        if (['questions', 'result'].includes(this.$route.name)) {
          this.$router.replace('login');
        }
      }
    });
  },
  methods: {
    logout() {
      firebase.auth().signOut();
      this.$router.push('login');
    },
  },
}
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: space-around;
  width: 400px;
  margin: 20px auto;
}
</style>