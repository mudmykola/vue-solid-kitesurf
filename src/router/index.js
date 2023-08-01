import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Kitesurfing from "@/views/KitesurfingPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/kitesurfing',
      name: 'kitesurfing',
      component: Kitesurfing
    },
    {
      path: "/:catchAll(.*)",
      name: "noRoute",
      component: () => import("../views/ErrorPage.vue"),
    },

  ]
})

export default router
