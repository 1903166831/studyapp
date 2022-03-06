<template>
  <div id="weather">
    <weath-nav-bar class="weath-nav"/>
    <weath-search class="search"/>
  </div>
</template>

<script>
  import WeathNavBar from './childCompon/WeathNavBar.vue'
  import WeathSearch from './childCompon/WeathSearch.vue'

  import { getWeathData } from 'network/weather'

  export default {
    name: "Weather",
    components: {
      WeathNavBar,
      WeathSearch
    },
    data() {
      return {
        params: {
          'city': '南京'
        }
      }
    },
    created() {
      // this.getWeathData(this.params)
    },
    methods: {

      // 获取 天气数据
      getWeathData(params) {
        getWeathData(params).then(res => {
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
