<template>
  <div class="register">
    <p>还没有账号？ <span @click="register">立即注册 ></span></p>
  </div>
</template>

<script>
  export default {
    name: "LoginRegister",
    methods: {
      register() {
        this.$router.push("/regist")
      }
    }
  }
</script>

<style scoped>
  .register{
    text-align: center;
  }
  .register p{
    font-size: 0.52rem;
    color: #001245;
  }
  .register span{
    color: #145aee;
  }
</style>
