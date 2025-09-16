<template>
    <div class="todo-footer">
        <div class="footer-left" v-show="total > 0">
            <input type="checkbox" class="todo-checkbox" v-model="handleAllDone">
            <p>已完成 {{ doneCount }} / 全部 {{ total }}</p>
        </div>
        <button class="btn-clear" v-show="doneCount > 0" @click="remove">清除已完成任务</button>
        <hr v-show="total === 0">
    </div>
</template>

<script>
export default {
    name: "TodoFooter",
    props: ["todoList"],
    computed: {
        doneCount() {
            return this.todoList.reduce((pre, cur) => {
                return pre + (cur.done ? 1 : 0)
            }, 0)
        },
        total() {
            return this.todoList.length
        },
        handleAllDone: {
            get() {
                return this.doneCount === this.total && this.total > 0
            },
            set(value) {
                this.$emit("changeAllDone", value)
            }
        }
    },
    methods: {
        remove() {
            this.$emit("deleteDone")
        }
    }
}
</script>

<style scoped>
.todo-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: #94a3b8;
}

.footer-left {
    display: flex;
    align-items: center;
    gap: 6px;
}

.btn-clear {
    background: #dc2626;
    color: #fff;
    border: none;
    padding: 6px 14px;
    border-radius: 8px;
    font-size: 13px;
    cursor: pointer;
    transition: 0.3s;
}

.btn-clear:hover {
    background: #b91c1c;
    box-shadow: 0 0 10px #dc262680;
}

hr {
    width: 100%;
    border-color: rgb(131, 130, 130);
}
</style>