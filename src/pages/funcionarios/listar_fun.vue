<template>
  <div class="listar_fun">
       <Header/>
        <SideBar/>
        <MidiaSocial/>

        <div class="card-body">
            <div class="title">
                <h2>Listagem de Funcionarios</h2>
            </div>
            <div class="form-group">
                <label for="search">Buscar Funcionario</label>
                <input type="search" class="form-control" v-model="nameBusca">
            </div>
                <div class=" flex-centro" >
                    <div class="table flex-centro">
                            <DataTable
                                :header-fields="colunas"
                                :data="funs"
                            />
                                <div class="coluna-Editar">
                                    <li v-for="fun in funs"  v-bind:key=" fun.id">
                                        <button class="btn btn-info"  >Editar</button>
                                    </li>
                                </div>
                                <div class="coluna-Delete">
                                    <li v-for="fun in funs"  v-bind:key=" fun.id">
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
            funss: [],
            colunas:[
                'id','name', 'nascimento', 'cpf', 'email', 'senha', 'logradouro', 'cep'
            ]
        }
    },
    mounted(){
    this.axios 
        .get('https://localhost:8080/AcademicNetWeb/AlunosServlet')
        .then(response=>(this.funs = response.data))
    }
}
</script>