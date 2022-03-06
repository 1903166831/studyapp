<template>
  <p class="back" @click="backClick">退出登录</p>
</template>

<script>
  export default {
    name: "SetBackLogin",
    methods: {
      backClick() {
        this.$router.push('/login')
      }
    },
  }
</script>

<style scoped>
  .back{
    height: 1.96rem;
    min-width: 6.4rem;
    max-width: 15rem;
    margin: 0 auto;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    background: #145aee;
    box-shadow: 0 -0.2rem 0.4rem -0.4rem #000;
    color: #fff;
    font-size: 0.64rem;
    line-height: 1.96rem;
    text-align: center;
  }
</style>
