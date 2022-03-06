<template>
  <nav-bar class="weath-search">
    <div class="search" slot="item-center">
      <img src="~assets/img/search_fdj_icon.png" alt="">
      <input type="text" placeholder="请输入城市名、拼英或者字母查询">
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'

  export default {
    name: "WeathSearch",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .search{
    height: 1.2rem;
    border-radius: 0.2rem;
    background: #f5f5f5;
    display: flex;
    align-items: center;
  }

  .search img {
    width: 0.5rem;
    margin: 0 0.4rem;
  }

  .search input {
    flex: 1;
    background: transparent;
  }

</style>
