<template>
    <div>
        <todo-item 
        v-for="todoObj in todoList" 
        :key="todoObj.id" 
        :todoObj="todoObj" 
     />
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
    name: "TodoList",
    components: { TodoItem },
    props: ["todoList"]
}
</script>

<style scoped></style>