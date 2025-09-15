<template>
    <div class="demo">
        <h2>名称: {{ name }}</h2>
        <h2>地址: {{ address }}</h2>
        <button @click="showName">点我提示名称</button>
    </div>
</template>

<script>
export default {
    name: "School",
    data() {
        return {
            name: "Vue",
            address: "https://vuejs.org/"
        }
    },
    methods: {
        showName() {
            alert(this.name)
        }
    }
}
</script>

<style>
.demo {
    background-color: rgb(255, 165, 0);
}
</style>      