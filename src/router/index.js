import HelloWorld from "../components/HelloWorld.vue";
import Helloworld2 from "../components/Helloworld2.vue";
import {createWebHistory, createRouter} from "vue-router";

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/hello2', component: Helloworld2},
]

const router = createRouter({
    history: createWebHistory(),
    routes:routes,
})

export default router