<template>
    <div class="main">
        <Header/>
        <SideBar/>
        <MidiaSocial/>

        <div class="card-body">
            <div class="title">
                <h2>Painel de Controle</h2>
            </div>
                <div class=" flex-centro" >
                    <div class="card">
                        <ul class="list-group" >
                            <li class="list-group-item" >
                                {{user.email}}
                                <span class="fa fa-shoppinh-cart"></span>
                            </li>    
                        </ul>                
                        </div>
                </div>
        </div>
    </div>
</template>

<script>
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/js/bootstrap.js"


import Header from "../components/header.vue";
import MidiaSocial from "../components/midiaSocial"
import SideBar from "../components/sideBar.vue";

export default {
    name: "Main",
    components: {
        Header,
        MidiaSocial,
        SideBar
    },
    data() {
        return {
            user: ""
        }
    },
    created() {
        this.user = this.$router.params.main;
    }
}
</script>

<style>
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