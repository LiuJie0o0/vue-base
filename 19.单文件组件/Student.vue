<template>
    <div>
        <h2>名字: {{ name }}</h2>
        <h2>年龄: {{ age }}</h2>
    </div>
</template>

<script>
export default {
    name: "Student",
    data() {
        return {
            name: "假老练",
            age: 22
        }
    },
    methods: {
        showName() {
            alert(this.name)
        }
    }
}
</script>

<style></style>