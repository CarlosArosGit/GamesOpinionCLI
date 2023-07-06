import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OpinionesView from '@/views/OpinionesView.vue';
import Administracion from '@/components/Administracion.vue';
import NotFound from '@/components/NotFound.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path:'/opiniones/:nombre',
    name: 'opiniones',
    component: OpinionesView,
    props: true,
  },
  {
    path:'/administracion/:nombre',
    name:'administracion',
    component: Administracion,
    props: true,
  },
  {
    path:'/:catchAll(.*)',
    name: 'notfound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
