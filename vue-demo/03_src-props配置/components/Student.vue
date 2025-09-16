<template>
    <div>
        <h1 v-text="msg"></h1>
        <h2>姓名: {{ name }}</h2>
        <h2>性别: {{ sex }}</h2>
        <h2>年龄: {{ age + 1 }}</h2>
    </div>
</template>

<script>
export default {
    name: "Student",
    props: ["name", "sex", "age"],
    // props: {
    //     name: String,
    //     sex: String,
    //     age: Number
    // },
    // props: {
    //     name: {
    //         type: String,    // 类型
    //         require: true,   // 必传
    //         default: "未知"  // 默认值
    //     },
    //     sex: {},
    //     age: {}
    // },
    data() {
        return {
            msg: "我是一个Vue学生"
        }
    }
}
</script>

<style></style>