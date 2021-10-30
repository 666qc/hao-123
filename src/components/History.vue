<template>
    <div>
        <!-- <h1 @click="qq">qqq</h1> -->
        历史
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
                    async Hricalhistory(){
                        let result = await this.$axios.get('http://127.0.0.1:3000/history')
                    let { historyData } = result.data
                    this.dataList = historyData
                    }
                },
                created() {
                    this.Hricalhistory()
                }
            }
    
</script>

<style lang="scss" scoped>

</style>