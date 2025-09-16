<template>
    <div>
        <h2>名称: {{ name }}</h2>
        <h2>地址: {{ address }}</h2>
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
    }
}
</script>

<style></style>