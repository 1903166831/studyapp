<template>
  <div id="app">
    <router-view class="router-view"/>
    <main-tab-bar v-show="isTabBarShow"/>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabBar/MainTabBar'

  import { getWeathData, getNowTemp } from 'network/weather'


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
    },
    created() {
      // 服务开始时 定位当前城市 开始获取天气信息
      this.$store.dispatch("asyncEditCity").then(res => {
        this.getWeathData(res)
        this.getNowTemp(res)
        console.log(this.$store.state.city);
      })
    },
    methods: {
      // 获取 天气数据
      getWeathData(params) {
        getWeathData(params).then(res => {
          this.futureData = res
          console.log(res);
        })
      },
      getNowTemp(params) {
        getNowTemp(params).then(res => {
          this.nowTemp = res.lives[0]
          console.log(res);
        })
      }
    }
  }
</script>


<style>
</style>
