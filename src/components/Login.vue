<template>
  <div class="container mt-3">
    <h3>ログイン</h3>
    <div class="text-right">
      <router-link class="btn btn-outline-primary" to="register">管理者登録</router-link>
    </div>
    <form class="col-md-6 mx-auto">
      <div class="mt-3">
        <label for="email">メールアドレス</label>
        <br />
        <input class="form-control" type="email" id="email" v-model="email" />
      </div>
      <div class="mt-3">
        <label for="pass">パスワード</label>
        <br />
        <input class="form-control" type="password" id="pass" autocomplete="off" v-model="pass" />
      </div>
      <br />
      <div>
        <button class="btn btn-info" @click="login">送信</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      pass: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        pass: this.pass,
      });
    }
  }
}
</script>