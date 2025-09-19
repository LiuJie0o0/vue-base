<template>
    <div class="todo-item">
        <label class="todo-label">
            <input type="checkbox" class="todo-checkbox" :checked="todoObj.done" @change="handleCheck(todoObj.id)">
            <input type="text" ref="titleInput" :value="todoObj.title" v-show="todoObj.isEdit"
                @blur="handleBlur($event, todoObj)">
            <span v-show="!todoObj.isEdit">{{ todoObj.title }}</span>
        </label>
        <div class="todo-btn">
            <button v-show="!todoObj.isEdit" class="btn-edit" @click="edit(todoObj)">编辑</button>
            <button class="btn-delete" @click="remove(todoObj.id)">删除</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "TodoItem",
    props: ["todoObj"],
    methods: {
        edit(todoObj) {
            if (todoObj.hasOwnProperty("isEdit")) {
                todoObj.isEdit = true
            } else {
                this.$set(todoObj, "isEdit", true)
            }
            this.$nextTick(function () {
                this.$refs.titleInput.focus()
            })
        },
        handleBlur(event, todoObj) {
            const title = event.target.value.trim()
            console.log(title);
            if (title) {
                this.$bus.$emit("editTodo", todoObj.id, title)
            }
            todoObj.isEdit = false
        },
        remove(id) {
            if (confirm("确认删除吗?")) {
                this.$bus.$emit("deleteTodo", id)
            }
        },
        handleCheck(id) {
            this.$bus.$emit("changeDone", id)
        }
    }
}
</script>

<style scoped>
.todo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    margin: 8px 0;
    border-radius: 8px;
    background: rgba(51, 65, 85, 0.6);
    transition: background 0.3s;
}

.todo-item:hover {
    background: rgba(51, 65, 85, 0.9);
}

.todo-item:hover .todo-btn {
    display: flex;
}

.todo-label {
    height: 25px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
}

.todo-checkbox {
    width: 16px;
    height: 16px;
    accent-color: #22d3ee;
    cursor: pointer;
}

.todo-btn {
    display: none;
    align-items: center;
    justify-content: space-between;
}

.todo-btn button {
    margin: 0 5px;
}

.btn-edit {
    background: #3654e7;
    color: #fff;
    border: none;
    font-size: 12px;
    padding: 4px 10px;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s;
}

.btn-delete {
    background: #dc2626;
    color: #fff;
    border: none;
    font-size: 12px;
    padding: 4px 10px;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s;
}

.btn-edit:hover {
    background: #162fac;
    box-shadow: 0 0 10px #3654e7;
}

.btn-delete:hover {
    background: #8a0808;
    box-shadow: 0 0 10px #dc262680;
}
</style>