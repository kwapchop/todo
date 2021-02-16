import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Todo from "../views/Todo.vue";
import Login from "../views/Login.vue";
import Registration from "../views/Registration.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "home" },
    component: Home
  },
  {
    path: "/auth/login",
    name: "Login",
    meta: { layout: "home" },
    component: Login
  },
  {
    path: "/auth/register",
    name: "Registration",
    meta: { layout: "home" },
    component: Registration
  },
  {
    path: "/todo",
    name: "Todo",
    meta: { layout: "main" },
    component: Todo
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

// <main-layout/>
