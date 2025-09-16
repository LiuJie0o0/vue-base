<template>
    <div>
        <h2 @click="showName">姓名: {{ name }}</h2>
        <h2>性别: {{ sex }}</h2>
    </div>
</template>

<script>
import {mixin} from "../mixin"

export default {
    name: "Student",
    mixins: [mixin],
    data() {
        return {
            name: "假老练",
            sex: "男"
        }
    }
}
</script>

<style></style>