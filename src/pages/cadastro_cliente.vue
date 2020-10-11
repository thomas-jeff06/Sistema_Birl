<template>
  <div>
    <body>
    <div class="container-flex height-max flex-centro">
        <div class="">
            <form @submit.prevent="checkForm" 
            action=""
            >

                <div class=" cadastro column">
                    <div>
                       <h3>Dados Pessoais</h3> 
                        <div class="form-group">
                            <label for="nome"> Seu nome pessoal</label>
                            <input v-model="user.nome" name="nome" class="form-control" type="text" >
                        </div>
                        <div class="form-group">
                            <label for="CPF"> CPF</label>
                            <input v-model="user.cpf" class="form-control" type="text" name="CPF"
                                id="CPF">
                        </div>

                        <div class="form-group">
                            <label for="academia"> Nome da sua Academia</label>
                            <input class="form-control" v-model="user.nomeAcademia" type="text" name="academia"
                                id="academia">
                        </div>
                        <div class="form-group">
                            <label for="CNPJ"> CNPJ</label>
                            <input class="form-control" v-model="user.cnpj" type="text" name="CNPJ" id="CNPJ">
                        </div>
                    </div>
                    <div>
                        <h3> Endereço</h3>
                        <div class="form-group">
                            <label for="cep"> CEP</label>
                            <input class="form-control" v-model="user.cep" type="number" name="cep" id="cep">
                        </div>
                        <div class="form-group">
                            <label for="estado"> Estado</label>
                            <select  v-model="user.estado" style="color:black">
                              <option v-for="option in estados" v-bind:key="option.id" style="color:black" >
                                {{ option}}
                              </option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="cidade"> Cidade</label>
                            <input class="form-control" v-model="user.cidade" type="text" name="cidade" id="cidade">
                        </div>
                        <div class="form-group">
                            <label for="Logradouro"> Logradouro</label>
                            <input class="form-control" v-model="user.logradouro" type="text" name="Logradouro" id="Logradouro">
                        </div>
                    </div>
                    <div>
                       <h3> Dados de Acesso</h3>
                        <div class="form-group">
                            <label for="email"> Email</label>
                            <input class="form-control" v-model="user.email" type="email" name="email"
                                id="email">
                        </div>
                        <div class="form-group">
                            <label for="senha"> senha</label>
                            <input class="form-control" v-model="user.password" type="password" name="senha" id="senha">
                        </div>
                        <div class="form-group">
                            <label for="senha_check">confirme sua senha</label>
                            <input class="form-control" v-model="passwordEquals" type="password" name="senha_check" id="senha_check">
                        </div>
                    </div>
                    <p v-if="errors.length">
                      <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
                      <ul>
                        <li v-for="error in errors" style="color:red" v-bind:key="error.id">{{ error }}</li>
                      </ul>
                    </p>

                    <div>
                        <button class="btn btn-success" id="cadastroButton" type="submit">Cadastrar</button>
                        <button id="limparButton" class="btn btn-warning" type="reset">Limpar campos</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</body>
  </div>
</template>

<script>
export default {
  name: "User",
data(){
  return {
    errors: [],
    user:{
      nome: null,
      cpf: null,
      nomeAcademia: null,
      cnpj: null,
      cep: null,
      estado: '',
      cidade: null,
      logradouro: '',
      email: null,
      password: null,
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
        'MG',
        'PA',
        'PB',
        'PR',
        'PE',
        'PI',
        'RJ',
        'RN',
        'RS',
        'RO',
        'RR',
        'SC',
        'SP',
        'SE',
        'TO'
      ],
  };
},
  methods:{
    checkForm: function(){
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
      if(this.user.nomeAcademia == null){
        this.errors.push('O nome da Academia é obrigatorio.');
      }
      if(this.user.cnpj == null){
        this.errors.push('O cnpj é obrigatorio.');
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

      if(this.user.nome != null && this.user.cpf != null && this.user.nomeAcademia != null && this.user.cnpj != null && this.user.cep != null && this.user.cidade != null 
        && this.user.email != null && this.user.password != null ){
          this.errors = [];
            
            this.axios.post('https://localhost:8080/AcademicNetWeb/login1',this.user);

            window.location.href = '/login';
        }
    }
  }
}
</script>

<style>

</style>