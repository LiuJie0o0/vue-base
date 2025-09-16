<template>
    <div>
        <input type="text" class="todo-input" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add">
    </div>
</template>

<script>
import { nanoid } from "nanoid"

export default {
    nameL: "TodoHeader",
    methods: {
        add(event) {
            const title = event.target.value.trim()
            if (title) {
                const todoObj = { id: nanoid(), title, done: false }
                this.$emit("addTodo", todoObj)
                event.target.value = ""
            }
        }
    }
}
</script>

<style scoped>
.todo-input {
    display: block;
    width: calc(100% - 24px);
    margin: 0 auto 12px auto;
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid #334155;
    background: #0f172a;
    color: #e2e8f0;
    font-size: 14px;
    outline: none;
    transition: 0.3s;
}

.todo-input:focus {
    border-color: #22d3ee;
    box-shadow: 0 0 8px #22d3ee80;
}
</style>