<template>
  <div id="app">
    <Student name="假老练" sex="男" age="22"></Student>
    <hr>
    <Student name="风车车" sex="男" :age="20"></Student>
  </div>
</template>

<script>
import Student from './components/Student.vue';

export default {
  name: 'App',
  components: {
    Student
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style></style>