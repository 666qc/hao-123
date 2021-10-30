<template>
    <div>
         <div v-for='item in dataList' :key='item.id'>
                {{item}}
            </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
                data() {
                    return {
                        dataList: {},
                    }
                },
                methods:{
                   async EntertainmentMEds(){
                    let result = await axios.get('http://127.0.0.1:3000/recreation')
                    let { recreationData } = result.data
                    this.dataList = recreationData
                    }
                },  
                 created() {
                    this.EntertainmentMEds()
                }
            
    }   
</script>

<style lang="sass" scoped>

</style>