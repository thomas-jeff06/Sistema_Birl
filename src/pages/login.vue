<template>
    <div class="appLogin" id="appLogin">
        <body>
            <div class="container-flex height-max column flex-centro align">

                <div id="cabecalho">
                    <h1>Seja bem vindo ao BIRLL</h1>
                </div>

                <div id="login">
                    <form >
                        <div class=" form-group">
                            <label for="InputEmail1">Email address</label>
                            <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                                else.</small>
                        </div>
                        <div class="form-group">
                            <label for="InputPassword1">Password</label>
                            <input type="password" class="form-control" id="InputPassword1">
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <div class="linhas">
                            <button type="button" id="loginButton" class="btn btn-primary mr-4">Entrar</button>
                            <!-- tipo button provisorio -->
                            <small id="CadastroHelp" class="form-text text-muted mr-2">Não possui login? </small>
                            <a type="button" href="/cadastro_cliente" class="button_Cadastro1">Cadastre-se</a>
                        </div>
                    </form>
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
    </body>
    </div>
</template>

<script>
export default {

}
</script>
<style scoped>
</style>