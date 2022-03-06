<template>
  <div id="setPage">
    <set-nav-bar class="nav"/>
    <set-list/>
    <set-back-login/>
  </div>
</template>

<script>
  import SetNavBar from './childCompon/SetNavBar.vue'
  import SetList from './childCompon/SetList.vue'
  import SetBackLogin from './childCompon/SetBackLogin.vue'

  export default {
    name: "Set",
    components: {
      SetNavBar,
      SetList,
      SetBackLogin
    }
  }
</script>

<style scoped>
  .nav{
    margin-bottom: 00.4rem;
  }
</style>
