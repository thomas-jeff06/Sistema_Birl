<template>
    <div class="lista">
        <Header/>
        <SideBar/>
        <MidiaSocial/>

        <div class="card-body">
            <div class="title">
                <h2>Listagem de Alunos</h2>
            </div>
                <div class=" flex-centro" >
                    <div class="table flex-centro">
                            <DataTable
                                :header-fields="colunas"
                                :data="userTest"
                            />
                                <div class="coluna-pagar">
                                    <li v-for="user in users"  v-bind:key=" user.id">
                                        <div v-if="user.ativo == true">
                                            <div class="bola" style="background-color: rgb(0, 255, 0);"></div>
                                        </div>
                                        <div v-if="user.ativo == false">
                                            <div class="bola" style="background-color : red" ></div>
                                        </div>
                                    </li>
                                </div>
                                <div class="coluna-Editar">
                                    <li v-for="user in users"  v-bind:key=" user.id">
                                        <button class="btn btn-info"  >Editar</button>
                                    </li>
                                </div>

                                <div class="coluna-Delete">
                                    <li v-for="user in users"  v-bind:key=" user.id">
                                        <button class="btn btn-danger" >Deletar </button>
                                    </li>

                                </div>
                        </div>
                </div>
        </div>
    </div>
</template>

<script>


import Header from "../../components/header";
import MidiaSocial from "../../components/midiaSocial"
import SideBar from "../../components/sideBar.vue";
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
            users: [],
            colunas:[
                'id','name', 'nascimento', 'cpf', 'email', 'senha', 'logradouro', 'cep'
            ]
        }
    },
    mounted(){
    this.axios 
        .get('https://localhost:8080/AcademicNetWeb/AlunosServlet')
        .then(response=>(this.user = response.data))
    }
}
</script>

<style>

</style>