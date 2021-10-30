<template>
  <div class="about">
    <h1>登录</h1>
     <p> 账号： <input type="text" v-model = 'accountNumber'> </p>
            <p> 密码： <input type="text" v-model = 'password'> </p>
            <p> <button @click='login'>登录</button> </p>        
  </div>
</template>
<script>
export default {
  data() {
            return {
                accountNumber: 'xxxx',
                password: '123'
            }
        },
        created:function(){
          this.login()
        },
        methods: {     
            async login() {
              let  data2 = {accountNumber:this.accountNumber ,password:this.password}

              let  data = { accountNumber: this.accountNumber, password: this.password }

                let result = await this.$axios.post('http://127.0.0.1:3000/login',data2)
                console.log(result)
                let { message, code, token } = result.data;
                if (code === 20009) {
                    localStorage.setItem("token", token)
                    // console.log(localStorage);
                    console.log('登录成功');
                    this.$router.push('/recreation')
                } else {
                    // alert(result.data.message)
                    console.log(message);
                    
                    
                }
                
            }
        }
}
</script>

