<template>
    <div class="category">
        <h3>{{ title }}分类</h3>
        <div class="center">
            <slot name="center"></slot><br>
        </div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Category",
    props: ["title", "listData"]
}
</script>

<style scoped>
.category {
    width: 200px;
    height: 300px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: #8b96dc;
    text-align: center;
}

h3 {
    width: 100%;
    flex: 1;
    background-color: #e9bf37;
}

ul,
li {
    list-style: none;
    margin: 0;
    padding: 0;
}

.center {
    width: 100%;
    flex: 5;
}

.footer {
    width: 100%;
    flex: 1
}
</style>