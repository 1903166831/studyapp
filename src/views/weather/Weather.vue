<template>
  <div id="weather">
    <weath-nav-bar class="weath-nav"/>
    <weath-search class="search"/>
    <weath-content :nowTempData="nowTemp" :futureData="futureData"/>
  </div>
</template>

<script>
  import WeathNavBar from './childCompon/WeathNavBar.vue'
  import WeathSearch from './childCompon/WeathSearch.vue'
  import WeathContent from './childCompon/WeathContent.vue'

  import { getWeathData, getNowTemp } from 'network/weather'

  export default {
    name: "Weather",
    components: {
      WeathNavBar,
      WeathSearch,
      WeathContent
    },
    data() {
      return {
        nowTemp: [],
        futureData: {}
      }
    },
    created() {

      this.getWeathData(this.$store.state.city)
      this.getNowTemp(this.$store.state.city)
      // this.gieCity()
    },
    mounted() {
      
    },
    methods: {
      


      // 获取 天气数据
      getWeathData(params) {
        getWeathData(params).then(res => {
          this.futureData = res
          // console.log(res);
        })
      },
      getNowTemp(params) {
        getNowTemp(params).then(res => {
          this.nowTemp = res.lives[0]
          // console.log(res);
        })
      }
    }
  }
</script>

<style scoped>
  #weather{
    background: #fff;
    padding: 0 0.6rem;
    box-sizing: border-box;
  }

  .search{
    margin: 0.7rem 0 0.4rem;
  }
</style>
