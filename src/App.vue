<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">登录</router-link> |
      <router-link to="/history">历史</router-link>|
      <router-link to="/fashion">时尚</router-link>|
      <router-link to="/recreation">娱乐</router-link>|


    </div>

     <transition mode='out-in'>
                <!-- 先out进来 先in出去  -->
                <keep-alive>
                    <!-- <router-viwe :is="card"></component> -->
                    <router-view>
                    </router-view>
                </keep-alive>
            </transition>

  </div>
</template>
 <script>
 export default {
   

   
 }
 </script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

    /* 进场和出场期间动画 */
    .v-enter-active,

    .v-leave-active {
        transition: all 0.7s;
    }

    /* 进场时 */
    .v-enter {
        opacity: 0;
        transform: translate3d(0, 0, -50%);
    }

    /* 出场时 */
    .v-leave-to {
        opacity: 0;
        transform: translate3d(0, 0, -50%);
    }

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
