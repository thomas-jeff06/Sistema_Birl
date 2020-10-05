<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Header/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/header'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>
