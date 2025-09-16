<template>
    <div class="todo-container">
        <todo-header @addTodo="addTodo"></todo-header>
        <todo-list :todoList="todoList"></todo-list>
        <todo-footer :todoList="todoList" @deleteDone="deleteDone" @changeAllDone="changeAllDone"></todo-footer>
    </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
    name: "App",
    components: {
        TodoHeader,
        TodoList,
        TodoFooter
    },
    data() {
        return {
            todoList: [
                { id: "1001", title: "抽烟", done: true },
                { id: "1002", title: "喝酒", done: true },
                { id: "1003", title: "烫头", done: false }
            ]
        }
    },
    methods: {
        addTodo(todoObj) {
            this.todoList.unshift(todoObj)
        },
        editTodo(id, title) {
            this.todoList.forEach(todo => {
                if (id === todo.id) {
                    todo.title = title
                }
            })
        },
        deleteTodo(id) {
            this.todoList = this.todoList.filter(todo => {
                return id !== todo.id
            })
        },
        deleteDone() {
            this.todoList = this.todoList.filter(todo => {
                return !todo.done
            })
        },
        changeDone(id) {
            this.todoList.forEach(todo => {
                if (id === todo.id) {
                    todo.done = !todo.done
                }
            })
        },
        changeAllDone(done) {
            this.todoList.forEach(todo => {
                todo.done = done
            })
        }
    },
    mounted() {
        this.$bus.$on("editTodo", this.editTodo)
        this.$bus.$on("deleteTodo", this.deleteTodo)
        this.$bus.$on("changeDone", this.changeDone)
    },
    beforeDestroy() {
        this.$bus.$off("editTodo")
        this.$bus.$off("deleteTodo")
        this.$bus.$off("changeDone")
    }
}
</script>

<style scoped>
.todo-container {
    margin-top: 50px;
    width: 420px;
    min-width: 420px;
    background: rgba(30, 41, 59, 0.7);
    border: 1px solid #334155;
    border-radius: 16px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(10px);
    padding: 20px;
}
</style>