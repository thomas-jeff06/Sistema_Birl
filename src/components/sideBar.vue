<template>
  <div class="sidebar">
        <h2>BIRL</h2>
        <ul class="flex-column">
            <li class="nav-item">
                <a class="nav-link" href="#"> home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#alunos" role="button" >Alunos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"> Pagamentos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"> Funcionarios</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"> Controle</a>
            </li>
        </ul>
    <div class="social_media">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
    </div>
    </div>
</template>

<script>
export default {
    //<div id="alunos" class="collapse"> 
                //<a class="dropdown-item" href="cadastro_alunos.html">Cadastrar Novo</a>
  //              <a class="dropdown-item" href="#">Listar</a>
      //      </div>
}
</script>

<style>
    .sidebar {
        width: 200px;
        height: 800px;
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
    .nav-item {
        display: block;
        width: 200px;
        height: 72px;
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