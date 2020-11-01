<template>
  <div class="payS" >
     <Header/>
       <SideBar/>
      <MidiaSocial/>

      <div class="card-body">
          <div class="title">
              <h2>Pagamentos</h2>
          </div>
              <div class=" flex-centro" >
              </div>
  </div>
  </div>
</template>

<script>

import Header from "../../components/header";
import MidiaSocial from "../../components/midiaSocial"
import SideBar from "../../components/sideBar.vue";

export default {
  name: "PaySearch",
    components: {
        Header,
        MidiaSocial,
        SideBar
    }
}
</script>