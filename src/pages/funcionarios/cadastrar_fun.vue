<template>
  <div class="cadastrar_fun">
      <Header/>
       <SideBar/>
      <MidiaSocial/>

      <div class="card-body">
          <div class="title">
              <h2>Cadastrar Funcionario</h2>
          </div>
                <div class="conteiner">
                         <form @submit.prevent="checkFormB" action="" >
                            <h5 class="card-title center" >Dados Pessoais</h5>
                                <div class=" column">
                                    <div>
                                        <br>
                                        <div class="form-group">
                                            <label for="nome"> Nome </label>
                                            <input v-model="user.name" class="form-control" type="text" >
                                        </div>
                                        <div class="row">
                                            <div class=" col-md-6 form-group">
                                                <label for="CPF"> CPF</label>
                                                <input v-model="user.cpf" class="form-control" type="text">
                                            </div>
                                            <div class=" col-md-6 form-group">
                                                <label for="nascimento"> Data de Nascimento</label>
                                                <input v-model="user.data" class="form-control" type="date">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <h5 class="card-title center">Endereço</h5>

                                <div class=" column">
                                    <div>
                                        <div class="row">
                                            <div class="col-md-6 form-group">
                                                <label for="cep"> CEP</label>
                                                <input v-model="user.cep" class="form-control" type="number">
                                            </div>
                                            <div class="col-md-6 form-group">
                                                <label for="estado"> Estado</label>
                                                <select  v-model="user.estado" style="color:black">
                                                    <option v-for="option in estados" v-bind:key="option.id" style="color:black" >
                                                        {{ option}}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="cidade"> Cidade</label>
                                            <input v-model ="user.cidade" class="form-control" type="text">
                                        </div>
                                        <div class="form-group">
                                            <label for="logradouro"> Logradouro</label>
                                            <input v-model="user.logradouro" class="form-control" type="text">
                                        </div>
                                    </div>
                                </div>
                                <h5 class="card-title"> Controle </h5>
                            <p class="card-text">
                                <div class="column">
                                    <div>

                                        <div class="form-group ">
                                            <label> Periodo de Trabalho</label> <br>
                                            <label for="manha">Manhã</label>
                                            <input type="checkbox" name="periodo">
                                            <label for="noite">Noite</label>
                                            <input type="checkbox" name="periodo" id="noite">
                                            <label for="tarde">Tarde</label>
                                            <input type="checkbox" name="periodo" id="tarde">
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6 form-group">
                                                <label for="cargo"> Cargo</label>
                                                <select name="cargo" v-model="cargo">
                                                    <option value="atendente"> Atendente</option>
                                                    <option value="personal"> Personal</option>
                                                    <option value="nutricionista"> Nutricionista</option>
                                                    <option value="instrutor"> Instrutor</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6 form-group">
                                                <label for="modalidade"> Modalidade</label>
                                                <select name="modalidade" id="modalidade">
                                                    <option value="estagiario"> Estagiario</option>
                                                    <option value="efetivo"> Efetivo</option>
                                                    <option value="contrato"> Contrato</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <h5 class="card-title center" >Dados de Acesso </h5>
                            <p class="card-text">
                                <div class="column">
                                    <div>

                                        <div class="form-group">
                                            <label for="Logradouro"> Email</label>
                                            <input v-model="user.email" class="form-control" type="emai">
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6 form-group">
                                                <label for="senha"> senha</label>
                                                <input v-model="user.senha" class="form-control" type="password">
                                            </div>
                                            <div class=" col-md-6 form-group">
                                                <label for="senha_check">confirme sua senha</label>
                                                <input v-model="passwordEquals" class="form-control"
                                                    type="password">
                                            </div>
                                        </div>
                                         
                                    </div>
                                    <p v-if="errors.length" class="erros">
                                            <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
                                            <ul>
                                                <li v-for="error in errors" style="color:red" v-bind:key="error.id">{{ error }}</li>
                                            </ul>
                                        </p>
                                </div>
                            <div>
                                <button class="btn btn-success center" type="submit">Cadastrar</button>
                                <button class="btn btn-warning center" id="limparButton" type="button">Limpar</button>
                            </div>
                        </form>
              </div>
         
      </div>
  </div>
</template>

<script>

import Header from "../../components/header";
import MidiaSocial from "../../components/midiaSocial"
import SideBar from "../../components/sideBar.vue";

export default {
  name: "CadastroFun",
    components: {
        Header,
        MidiaSocial,
        SideBar
    },
    data(){
        return {
            errors: [],
            user: {
                name: null,
                cpf: null,
                data: null,
                cep: null,
                estado: "",
                cidade: null,
                logradouro: "",
                email:null,
                senha:null
            },
        passwordEquals: '',
        estados: [
            'AC',
            'AL',
            'AP',
            'AM',
            'BA',
            'CE',
            'DF',
            'ES',
            'GO',
            'MA',
            'MT',
            'MS',
            'MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'
        ],    
        }
    },
    methods: {
        checkFormA: function(){
            console.log(this.user);

            this.errors = [];

            if(this.user.nome == null){
                this.errors.push('O nome é obrigatorio.');
            }

            if(this.user.cpf == null){
                this.errors.push('O cpf é obrigatorio.');
            }else{
                var Soma= 0
                var Resto= 0;
                var strCPF = this.user.cpf;
                console.log('debug010'); 

                if(strCPF.length > 11 || strCPF == "00000000000" || strCPF == "11111111111" || strCPF == "22222222222" || strCPF == "33333333333" || 
                strCPF == "44444444444" || strCPF == "55555555555" || strCPF == "66666666666" || strCPF == "77777777777" || strCPF == "88888888888" ||
                strCPF == "99999999999"){
                this.errors.push('CPF invalido !');
                return 0;
                } 
                
                for (let index = 10, i=0; index > 1;i++, index--) {
                Soma = Soma + (index * parseInt(strCPF.substring(i,i+1)));
                    
                }
                Resto = (Soma) % 11;
                Resto=11-Resto;  
                if (Resto >9)  Resto = 0;
                if(Resto !=strCPF.substring(9,10) ) {
                this.errors.push('CPF invalido !'); 
                return 0;
                }
                Resto=0;
                Soma=0;
                for (let index = 11, i=0; index > 1;i++, index--) {
                    Soma = Soma + index * parseInt(strCPF.substring(i,i+1));
            }
                Resto = (Soma) % 11;
                Resto=11-Resto;  
                if (Resto >9)  Resto = 0;
                if(Resto !=strCPF.substring(10,11) ){
                this.errors.push('CPF invalido !'); 
                return 0;
                }
            }
            if(this.user.cep == null){
                this.errors.push('O cep é obrigatorio.');
            }
            if(this.user.cidade == null){
                this.errors.push('A cidade é obrigatoria.');
            }
            if(this.user.email == null){
                this.errors.push('O E-mail é obrigatorio.');
            }
            if(this.user.password == null){
                this.errors.push('Senha é obrigatorio.');
            }else
            {
                var senha = this.user.password;
                var senha_reg = /^(?=.*\d)(?=.*[a-z]).{8,}$/;
                if (!new RegExp(senha_reg).test(senha)) {
                    this.errors.push(' A senha dever 8 caracteres e pelo menos Uma Letra!');
                    return 0;
                } else{
                var senha1 = this.user.password;
                var senha2 = this.passwordEquals;

                if (senha1 != senha2) {
                    console.log(senha1 + 'e' + senha2);

                    this.errors.push('O campo Senha difere!');
                    this.passwordEquals = '';
                    return 0;

                }
            }
            }

            if(this.user.nome != null && this.user.cpf != null && this.user.cep != null && this.user.cidade != null 
                && this.user.email != null && this.user.password != null ){
                this.errors = [];
                
                   
                }
            }
        }
}
</script>