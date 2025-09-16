<template>
  <div id="app">
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
    <School ref="sch"></School>
  </div>
</template>

<script>
import School from './components/School.vue';

export default {
  name: 'App',
  components: {
    School
  },
  data() {
    return {
      msg: "欢迎学习Vue!"
    }
  },
  methods: {
    showDOM() {
      // 真实DOM元素
      console.log("0o0", this.$refs.title);
      // 真实DOM元素
      console.log("0o0", this.$refs.btn);
      // VC
      console.log("0o0", this.$refs.sch);
    }
  }
}
</script>

<style></style>