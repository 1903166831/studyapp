<template>
  <nav-bar class="set-nav" :isLeftToPage="true" leftPath="/profile">
    <img slot="item-left" src="~assets/img/personal_back_icon.png" alt="" class="back">
    <p slot="item-center" class="page-title">设置</p>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar"

  export default {
    name: "SetNavBar",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .set-nav{
    padding: 0 0.6rem;
    box-sizing: border-box;
    background: #fff;
    height: 1.76rem;
    position: relative;
  }

  .back{
    width: 0.76rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0.6rem;
    margin: auto;
  }

  .page-title{
    font-size: 0.72rem;
    color: #282828;
  }
</style>
