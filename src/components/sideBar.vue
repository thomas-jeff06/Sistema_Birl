<template>
  <div class="sidebar">
        <h2 style="font-size:22px" >BIRL</h2>
        <ul class="flex-column">
            <li class="nav-item">
                <router-link to="/main" class="nav-link"> home</router-link>
            </li>
             <li class="nav-item ">
                    <a class="nav-link " data-toggle="collapse" href="#funcionarios" role="button">Alunos</a>

                </li>
                <div id="funcionarios" class="collapse">
                    <button @click="cadastroChen" class="dropdown-item">Cadastrar Novo</button>
                    <button @click="listaChen" class="dropdown-item">Listar</button>

                </div>
            <li class="nav-item">
                <router-link to="/paySearch" class="nav-link"> Pagamentos</router-link>
            </li>
             <li class="nav-item ">
                    <a class="nav-link " data-toggle="collapse" href="#alunos" role="button">Funcionarios</a>

                </li>
                <div id="alunos" class="collapse">
                    <button @click="cadastroFun" class="dropdown-item">Cadastrar Novo</button>
                    <button @click="listaFun" class="dropdown-item">Listar</button>

                </div>
            <li class="nav-item">
                <router-link to="/controle" class="nav-link" href="#"> Controle</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/alert';
import "../../public/css/style.css"
import "../../public/css/navbar.css"
import "../../public/bootstrap/css/bootstrap.min.css";

export default {
    methods:{
        listaChen(){
            this.$router.push({
                path:'/listagem'
            })
        },
        cadastroChen(){
             this.$router.push({
                path:'/cadastro_aluno'
            })
        },
            listaFun(){
            this.$router.push({
                path:'/listar_fun'
            })
        },
        cadastroFun(){
             this.$router.push({
                path:'/cadastro_fun'
            })
        }

    }
}
</script>

<style>
    .sidebar {
        width: 200px;
        height: 100%;
        position: fixed;
        background: #5d5a6b;
    }
    .flex-column{
        padding: 0px;
    }
    .collapse{
        display: block;
        width: 200px;
        height: 72px;
        border-bottom: 1px solid rgba(0,0,0,0.05);
        border-top: 1px solid rgba(255,255,255,0.05);
    }
    .dropdown-item{
        font-size: 15px;
        width: 200px;
        height: 36px;
        border: none;
        color: #bdb8d7;
        background-color: #5d5a6b;
        border-bottom: 1px solid rgba(0,0,0,0.05);
        border-top: 1px solid rgba(255,255,255,0.05);
    }
    .nav-item{
        font-size: 18px;
        width: 200px;
        height: 72px;
        border: none;
        color: #bdb8d7;
        background-color: #5d5a6b;
        border-bottom: 1px solid rgba(0,0,0,0.05);
        border-top: 1px solid rgba(255,255,255,0.05);
    }
    a {
        color: #bdb8d7;
        display: block;
        text-decoration: none;
        background-color: transparent;
        width: 138px;
        height: 24px;
        margin-top: 20px;
        padding: 8px 16px;
        font-family: 'Josefin Sans', sans-serif;
        margin-left: 30px;
    }
    li{
        list-style-type: none;
    }
    h2 {
        color: #fff;
        text-transform: uppercase;
        text-align: center;
        padding: 16px 8px;
        font-weight: 500;
        display: block;
        font-size: 1.8em;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        font-weight: bold;
    }
</style>