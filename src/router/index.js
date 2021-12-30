import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import States from "../views/States.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/states",
        name: "States",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: States,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
