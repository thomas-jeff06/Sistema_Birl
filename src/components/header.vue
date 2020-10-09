0<template>
  <div id="header">
      <div id="cabecalho">
          <p>Olá academia {{ name }}! tenha um otimo dia </p>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
        name: "irineu"
        }
    }

}
</script>

<style>
p{
    text-align:center;
    margin-left: 550px;
    color: black
}
    #header{
        display:flex;
        position: absolute;
        padding: 20px;
        color: black;
        background: #fff;
        color: #717171;
        border-bottom: 1px solid #e0e4e8;
        height: 80px;
        width: 100%;
        font-size: 26px;
        
    }
</style>