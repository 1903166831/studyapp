<template>
  <menu-view class="menu-view">
    <menu-item class="menuItem" v-for="(item, index) in menuCount" :key="index">
      <template v-slot:icon>
        <img src="~assets/img/menu_item_poster2.png" alt="">
      </template>
      <template v-slot:text>
        <p>精选专辑</p>
      </template>
    </menu-item>
  </menu-view>
</template>

<script>
  import MenuView from 'components/common/menu/Menu'
  import MenuItem from 'components/common/menu/MenuItem'

  export default {
    name: "MainMenu",
    components: {
      MenuView,
      MenuItem
    },
    data() {
      return {
        menuCount: 8
      }
    }
  }
</script>

<style scoped>
  .menu-view{
    padding: 0 0.6rem 0.96rem;
    box-sizing: border-box;
    background: #fff;
  }

  .menuItem{
    flex: 0 25%;
    margin-top: 0.68rem;
  }

  .menuItem img{
    width: 1.94rem;
  }

  .menuItem p{
    color: #333;
    font-size: 0.48rem;
  }
</style>
