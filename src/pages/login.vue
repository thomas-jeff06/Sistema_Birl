<template>
    <div class="appLogin" id="appLogin">
        <body>
            <div class="container-flex height-max column flex-centro align">

                <div id="cabecalho">
                    <h1>Seja bem vindo ao BIRLL</h1>
                </div>

                <div id="login">
                  
                        <div class=" form-group">
                            <label for="InputEmail1">Email address</label>
                            <input type="email" class="form-control" v-model="user.email">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                                else.</small>
                        </div>
                        <div class="form-group">
                            <label for="InputPassword1">Password</label>
                            <input type="password" class="form-control" v-model="user.senha">
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <div class="linhas">
                            <button @click="login" class="btn btn-primary mr-4">Entrar</button>
                            <!-- tipo button provisorio -->
                            <small id="CadastroHelp" class="form-text text-muted mr-2">Não possui login? </small>
                            <router-link to="/cadastro_cliente" class="button_Cadastro1">Cadastre-se</router-link>
                        </div>
                    
                </div>


            </div>
            <div class="modal fade" id="Alertsenha" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class=" alert alert-danger" role="alert">
                        <div id="Alert1" class=" alert alert-danger" role="alert">
                        </div>
                    </div>
                </div>
            </div>

            <p v-if="errors.length" class="erros">
                <ul>
                    <li v-for="error in errors" style="color:red" v-bind:key="error.id">{{ error }}</li>
                </ul>
            </p>
    </body>
    </div>
</template>

<script>
export default {
    name: 'login',
    data(){
        return {
            user: "",
            erros: [],
            status
        };
    },
    mounted(){
        this.axios.post('https://localhost:8080/AcademicNetWeb/login1')
        .then(response=>(this.status = response))
    },
    methods: {
        login(){
            if(status == true){
                this.$router.push({
                    path:`/main/${this.user.data.id}`
                })
            }else {
                this.erros.push("Email ou Senha Incorretos!")
            }
        }
    }

}
</script>