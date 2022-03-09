<template>
  <div id="login">
    <login-bg/>
    <login-info/>
    <comment-submit text="立即登录" class="btn"  @click.native="btnLogin"/>
    <login-register/>
  </div>
</template>

<script>
  import LoginBg from './childCompon/LoginBg.vue'
  import LoginInfo from './childCompon/LoginInfo.vue'
  import CommentSubmit from "views/comment/childCompon/CommentSubmit"
  import LoginRegister from './childCompon/LoginRegister.vue'

  export default {
    name: "Login",
    components: {
      LoginBg,
      LoginInfo,
      CommentSubmit,
      LoginRegister
    },
    methods: {
      btnLogin() {
        this.$router.push('/home')
      }
    }
  }
</script>

<style scoped>
  #login{
    background: #fff;
  }

  .btn{
    margin: 0.8rem auto 0.68rem;
  }
</style>
