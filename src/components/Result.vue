<template>
  <div class="container mt-3">
    <h3>アンケート回答結果</h3>
    <Menu/>
    <div class="my-3">
      <Chart/>
      <ul v-for="(answer, index) in this.$store.getters.getAnswers" :key="index">
        <li>No {{ index + 1 }} : {{ answer.content }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Chart from './Chart';
import Menu from './Menu'

export default {
  components: {
    Chart,
    Menu
  }
}
</script>

<style scoped>
  li {
    list-style-type: none
  }
</style>