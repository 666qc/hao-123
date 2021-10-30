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
                   async FashionMtod(){
                        let result = await this.$axios.get('http://127.0.0.1:3000/fashion')
                    let { fashionData } = result.data
                    this.dataList = fashionData
                    
                    }
                },
                 created() {
                    this.FashionMtod()
                    
                },

            
    }
</script>

<style lang="sass" scoped>

</style>