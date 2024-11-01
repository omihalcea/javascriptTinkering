import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CalculadoraView from "@/views/CalculadoraView.vue";
import JsonView from "@/views/JsonView.vue";
import AxiosView from "@/views/AxiosView.vue";
import('../views/CalculadoraView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/calculadora',
      name: 'calculadora',
      component: CalculadoraView
    },
    {
      path: '/json',
      name: 'JsonView',
      component: JsonView
    },
    {
      path: '/axios',
      name: 'AxiosView',
      component: AxiosView
    }
  ]
})

export default router
