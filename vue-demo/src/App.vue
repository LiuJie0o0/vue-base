<template>
    <div class="container">
        <Category title="美食" :listData="foods">
            <img slot="center" src="../images/vite.jpg" alt="vite" width="150px">
            <a slot="footer" href="https://cn.vitejs.dev/">更多...</a>
        </Category>
        <Category title="游戏" :listData="games">
            <template v-slot:center>
                <ul>
                    <li v-for="(name, index) in games" :key="index">
                        {{  name }}
                    </li>
                </ul>
            </template>
            <a slot="footer" href="https://cn.vitejs.dev/">更多...</a>
        </Category>
        <Category title="电影" :listData="films"></Category>
    </div>
</template>

<script>
import Category from "./components/Category.vue"

export default {
    name: "App",
    components: {
        Category
    },
    data() {
        return {
            foods: ["火锅", "烧烤", "龙虾", "牛排"],
            games: ["红色警戒", "穿越火线", "反恐精英", "超级玛丽"],
            films: ["《教父》", "《拆弹专家》", "《你好，李焕英》","《肖申克的救赎》"]
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.container {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
}
</style>