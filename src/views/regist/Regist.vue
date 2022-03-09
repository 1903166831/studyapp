<template>
  <div id="regist">
    <login-bg/>
    <regist-list/>
    <comment-submit text="立即注册" class="btn"  @click.native="btnLogin"/>
  </div>
</template>

<script>
  import LoginBg from "views/login/childCompon/LoginBg"
  import RegistList from './childCompon/RegistList.vue'
  import CommentSubmit from "views/comment/childCompon/CommentSubmit"

  export default {
    name: "Regist",
    components: {
      LoginBg,
      RegistList,
      CommentSubmit
    },
    methods: {
      btnLogin() {
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>
  #regist{
    background: #fff;
  }
  .btn{
    margin: 0.8rem auto 0;
  }
</style>
