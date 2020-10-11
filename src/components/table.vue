<template>
    <DataTable
    :header-fields="headerFields"
    :data="data"
    />
</template>

<script>
import { DataTable } from 'v-datatable-light'
export default {
     name:"table",
    components:{
        DataTable
    },
    data() {
        return {
            
        }
     }
}
</script>

<style>
</style>