<template>
  <div id="login">
    <login-bg/>
    <login-info/>
  </div>
</template>

<script>
  import LoginBg from './childCompon/LoginBg.vue'
  import LoginInfo from './childCompon/LoginInfo.vue'

  export default {
    name: "Login",
    components: {
      LoginBg,
      LoginInfo
    }
  }
</script>

<style scoped>
  #login{
    background: #fff;
  }
</style>
