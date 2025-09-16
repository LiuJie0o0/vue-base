<template>
    <div class="bgc">
        <h2 @click="showName">姓名: {{ name }}</h2>
        <h2>性别: {{ sex }}</h2>
    </div>
</template>

<script>
export default {
    name: "Student",
    data() {
        return {
            name: "假老练",
            sex: "男",
        };
    },
    methods: {
        showName() {
            console.log("0o0", this.name);
        },
    },
};
</script>

<style scoped>
.bgc {
    background-color: rgb(82, 140, 239);
}
</style>