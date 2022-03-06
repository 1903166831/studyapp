<template>
  <div class="login-info">
    <mycour-list-com>
      <set-list class="login-list">
        <img slot="icon" src="~assets/img/login_phone_icon.png" alt="">
        <input slot="text" type="text" placeholder="请输入手机号">
      </set-list>
    </mycour-list-com>
    <mycour-list-com>
      <set-list class="login-list">
        <img slot="icon" src="~assets/img/login_lock_icon.png" alt="">
        <input slot="text" type="text" placeholder="请输入密码">
      </set-list>
    </mycour-list-com>
  </div>
</template>

<script>
  
  import MycourListCom from 'components/content/mycourList/MycourListCom'
  import SetList from 'components/content/setList/SetList'

  export default {
    name: "LoginInfo",
    components: {
      MycourListCom,
      SetList
    }
  }
</script>

<style scoped>
  .login-list{
    height: 2.24rem;
    margin: 0.4rem 1.4rem 0.4rem 2rem;
    border-bottom: 0.02rem solid #f2f4f6;
  }
  .login-list img{
    margin-right: 0.52rem;
  }

</style>
