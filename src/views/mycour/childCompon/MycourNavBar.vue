<template>
  <nav-bar class="mycour-nav">
    <img slot="item-left" src="~assets/img/comment_comment_head_back.png" alt="" class="back-icon">
    <p class="title" slot="item-center">我的课程</p>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'
  export default {
    name: "MycourNavBar",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .mycour-nav{
    height: 1.76rem;
    background: #145aee;
    padding: 0 0.6rem;
    box-sizing: border-box;
  }

  .mycour-nav img{
    width: 0.64rem;
    vertical-align: middle;
  }

  .title{
    color: #fff;
    font-size: 0.6rem;
    text-align: center;
  }
</style>