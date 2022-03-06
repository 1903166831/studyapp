<template>
  <div id="app">
    <router-view class="router-view"/>
    <main-tab-bar v-show="isTabBarShow"/>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabBar/MainTabBar'
  export default {
    name: 'App',
    components: {
      MainTabBar
    },
    computed: {
      // 判断 tabBar 是否显示
      isTabBarShow() {
        return this.$route.meta.isTabBarShow
      }
    }
  }
</script>

<style>
</style>
