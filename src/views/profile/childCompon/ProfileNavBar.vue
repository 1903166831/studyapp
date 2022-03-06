<template>
  <nav-bar class="profile-nav">
    <div class="protrait" slot="item-left">
      <img src="~assets/img/personal_portrait.png" alt="" class="protrait-img">
      <img src="~assets/img/personal_portrait_edit.png" alt="" class="edit-protra">
    </div>
    <div class="user-info" slot="item-center">
      <p class="userPhone">{{$store.state.phoneNum}}</p>
      <p class="userName">{{$store.state.userName}}</p>
    </div>
    <div class="news" slot="item-right">
      <img src="~assets/img/personal_news_icon.png" alt="" class="news-icon">
      <p class="news-quantity">99</p>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'

  export default {
    name: "ProfileNavBar",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .user-info{
    margin-left: 0.6rem;
  }

  .user-info .userPhone{
    font-size: 0.64rem;
  }

  .user-info .userName{
    font-size: 0.52rem;
  }

  .user-info p{
    text-align: left;
  }

  .protrait{
    position: relative;
  }

  .protrait-img{
    height: 2.36rem;
  }

  .edit-protra{
    width: 0.72rem;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .news{
    position: relative;
  }

  .news .news-icon{
    height: 0.6rem;
  }

  .news .news-quantity{
    width: 0.4rem;
    height: 0.4rem;
    font-size: 0.24rem;
    text-align: center;
    line-height: 0.4rem;
    color: #fff;
    background: red;
    border-radius: 50%;
    position: absolute;
    top: -0.2rem;
    right: -0.2rem;
  }
</style>
