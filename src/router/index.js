import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home.vue'


import Login from '../pages/login.vue'
import Cadastro from '../pages/cadastro_cliente.vue';

import Main from '../pages/main.vue';

import Cadastro_Aluno from '../pages/alunos/cadastrar_aluno.vue'
import Listagem from '../pages/alunos/listagem.vue';
import Cadastro_Ficha from '../pages/alunos/cadastro_fichas.vue';

import PaySearch from '../pages/pagamentos/paySearch.vue'
import PayMain from '../pages/pagamentos/pay.vue';

import Cadastro_fun from '../pages/funcionarios/cadastrar_fun.vue'
import Listar_fun from '../pages/funcionarios/listar_fun.vue'

import Controle from '../pages/controle.vue'

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
    path:'/main',
    name: Main,
    component: Main
  },
  {
    path:'/cadastro_aluno',
    name: Cadastro_Aluno,
    component: Cadastro_Aluno
  },
  {
    path:'/listagem',
    name: Listagem,
    component: Listagem
  },
  {
    path:'/cadastro_Ficha',
    name: Cadastro_Ficha,
    component: Cadastro_Ficha
  },
  {
    path:'/paySearch',
    name: PaySearch,
    component: PaySearch
  },
  {
    path:'/payMain',
    name: PayMain,
    component: PayMain
  },
  {
    path:'/cadastro_fun',
    name: Cadastro_fun,
    component: Cadastro_fun
  },
  {
    path:'/listar_fun',
    name: Listar_fun,
    component: Listar_fun
  },
  {
    path:'/controle',
    name: Controle,
    component: Controle
  },
  {
    path:'*',
    redirect:'/'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
