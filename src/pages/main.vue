<template>
    <div class="main">
        <Header/>
        <SideBar/>
        <MidiaSocial/>

        <div class="card-body">
            <div class="title">
                <h2>Painel de Controle</h2>
            </div>
            <div class="form-group">
                <label for="search">Buscar Aluno</label>
                <input type="search" class="form-control" v-model="nameBusca">
            </div>
                <div class=" flex-centro" >
                    <div class="table flex-centro">
                        
                            <DataTable
                                :header-fields="colunas"
                                :data="userTest"
                            />
                                <div class="coluna-pagar">
                                    <li v-for="user in userTest"  v-bind:key=" user.id">
                                        <div v-if="user.ativo == true">
                                            <div class="bola" style="background-color: rgb(0, 255, 0);"></div>
                                        </div>
                                        <div v-if="user.ativo == false">
                                            <div class="bola" style="background-color : red" ></div>
                                        </div>
                                    </li>
                                </div>           
                        </div>
                </div>
        </div>
    </div>
</template>

<script>
//mostrar alunos e suas informações
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/js/bootstrap.js"


import Header from "../components/header.vue";
import MidiaSocial from "../components/midiaSocial"
import SideBar from "../components/sideBar.vue";
import { DataTable } from 'v-datatable-light'

export default {
    name: "Main",
    components: {
        Header,
        MidiaSocial,
        SideBar,
        DataTable
    },
    data() {
        return {
            nameBusca : '',
            users: "",
            baseURI: "http://localhost:8080/api/funs",
            colunas:[
                'id','name', 'nascimento', 'cpf', 'email', 'senha', 'logradouro', 'cep'
            ]
           
        }
    },
    methods:{},
    
    mounted(){
         this.$http.get(this.baseURI).then((result) => {
            this.users = result.data;
            console.log(this.users);
            });
        }
}
</script>

<style>
.coluna-pagar{
    position: absolute;
    margin-left: 800px;
    margin-top: 43px;
}
.bola {
    border-radius: 50%;
    display: inline-block;
    height: 17px;
    width: 17px;
    opacity: 0.5;
    border: 1px solid #000;
    margin: 1px 1px 1px 1px;
    margin-right: 1590px;
    margin-top: 12px;
}
.btn{
    font-size: 13px;
    width: 60px;
    height: 40px;
    margin: 1px 1px 1px 1px ;
}
.coluna-Editar{
    position: absolute;
    margin-top: 42px;
    margin-left: 925px;
}
.table{
    background-color: #b2aed8;
    font-size:18px;
    border-width: 1px;
    border-style: solid;
    border-color: #00f;
}
.title{
    text-decoration-color: white;
    background-color: black;
    position: center;
    margin-top: 0px;
    border-radius: 5px;
    box-shadow: 5px 5px 5px rgba(39, 38, 38, 0.5);
}
.card-body{
    border-radius: 5px;
    position: absolute;
    margin-top: 100px;
    margin-left: 250px;
    min-height: 90%;
    width: 80%;

    background-color: rgb(165, 163, 163)
}
</style>