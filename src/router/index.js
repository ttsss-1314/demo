import Basiclayout from "../layout/Basiclayout.vue";
import HelloWorld from "../components/HelloWorld.vue";
import Helloworld2 from "../components/Helloworld2.vue";
import Translate from "../components/Translate.vue";
import {createWebHistory, createRouter} from "vue-router";

const routes = [
    {
        path: '/',
        component: Basiclayout, // 使用 Basiclayout 作为布局
        children: [
            { path: '', component: HelloWorld }, // 默认显示翻译页面
            { path: 'hello2', component: Helloworld2},
            { path: 'trans', component: Translate},
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes:routes,
})

export default router