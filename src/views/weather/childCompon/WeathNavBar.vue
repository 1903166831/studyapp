<template>
  <nav-bar class="waeth-nav"  leftPath="/home" :isLeftToPage="true">
    <img class="back-icon" slot="item-left" src="~assets/img/personal_back_icon.png" alt="">
    <div class="choose-area" slot="item-center">
      <div class="nav-area">
        <p>境内</p>
        <p>境外/港澳台</p>
      </div>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'

  export default {
    name: "WeathNavBar",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .waeth-nav{
    position: relative;
  }

  .back-icon{ 
    width: 0.76rem;
    vertical-align: middle;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    /* z-index: 6; */
  }

  .choose-area{
    text-align: center;
  }

  .nav-area{
    width: 6.44rem;
    line-height: 1.2rem;
    color: #393737;
    font-size: 0.48rem;
    background: #eee;
    border-radius: 0.2rem;
    padding: 0.08rem;
    box-sizing: border-box;
    margin: auto;
    display: flex;
    justify-content: center;
  }

  .nav-area p{
    flex: 1;
    height: 100%;
  }

  .nav-area p:first-child{
    background: #fff;
    border-radius: 0.12rem;
  }
</style>
