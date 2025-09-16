<template>
    <div>
        <h2 @click="showName">名称: {{ name }}</h2>
        <h2>地址: {{ address }}</h2>
    </div>
</template>

<script>
import {mixin} from "../mixin"

export default {
    name: "School",
    mixins: [mixin],
    data() {
        return {
            name: "Vue",
            address: "https://vuejs.org/"
        }
    }
}
</script>

<style></style>