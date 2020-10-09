import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home.vue'


import Login from '../pages/login.vue'
import Cadastro_Aluno from '../pages/alunos/cadastrar_aluno.vue'

import Cadastro from '../pages/cadastro_cliente.vue';
import Main from '../pages/main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/login',
    component: Login,
  },
  {
    path:'/cadastro_cliente',
    name:Cadastro,
    component:Cadastro
  },
  {
    path:'/main/:id',
    name: Main,
    component: Main
  },
  {
    path:'/main/cadastro_aluno/:id',
    name: Cadastro_Aluno,
    component: Cadastro_Aluno
  },
  {
    path:'*',
    redirect:'/'
  },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
