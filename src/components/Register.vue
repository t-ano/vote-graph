<template>
  <div class="container mt-3">
    <h3>管理者登録</h3>
    <div class="text-right">
      <router-link class="btn btn-outline-info" to="login">ログイン</router-link>
    </div>
    <form class="col-md-6 mx-auto">
      <div>
        <label for="email">メールアドレス</label>
        <br />
        <input class="form-control" type="email" id="email" v-model="email" />
      </div>
      <div>
        <label for="pass">パスワード</label>
        <br />
        <input class="form-control" type="password" id="pass" autocomplete="off" v-model="pass" />
      </div>
      <br />
      <div>
        <button class="btn btn-primary" @click="register">登録</button>
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
    register() {
      this.$store.dispatch("register", {
        email: this.email,
        pass: this.pass,
      });
      this.email = "";
      this.pass = "";
    },
  },
};
</script>