<template>
  <nav-bar class="navBar" :isLeftToPage="true" leftPath="/weather">
    <template v-slot:item-left>
      <div class="left">
        <img src="~assets/img/weather_icon.png" alt="">
        <p>10℃</p>
      </div>
    </template>
    <template v-slot:item-center>
      <div class="center">
        <div class="ipt-box">
          <img src="~assets/img/search_fdj_icon.png" alt="">
          <input type="text" placeholder="web前端基础课程">
        </div>
      </div>
    </template>
    <template v-slot:item-right>
      <div class="right">
        <img src="~assets/img/add_icon.png" alt="">
      </div>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'

  export default {
    name: "MainNavBar",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .navBar{
    height: 1.76rem;
    padding: 0 0.6rem;
    box-sizing: border-box;
    background: url(~assets/img/banner_search_bg.png) no-repeat top center;
    background-position: center -0.8rem;
    background-size: 100% auto;
  }

  .left{
    text-align: center;
  }

  .left img{
    width: 0.84rem;
  }

  .left p{
    font-size: 0.36rem;
    color: #fff;
  }

  .ipt-box{
    width: 11.74rem;
    background: #fff;
    height: 1rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    margin: auto;
  }
  
  .ipt-box img{
    width: 0.6rem;
    margin: 0 0.3rem 0 0.4rem;
  }

  .ipt-box input::placeholder{
    color: #999;
  }

  .right img{
    width: 0.66rem;
  }
</style>
