<template>
  <div id="home">
    <main-nav-bar/>
    <feature-view/>
    <main-menu class="main-menu"/>
    <main-course :newData="newData"/>
    <recommend/>
    <guess :guessData="guessData"/>
  </div>
</template>

<script>
  import MainNavBar from './childCompon/MainNavBar'
  import FeatureView from './childCompon/FeatureView'
  import MainMenu from './childCompon/MainMenu'
  import MainCourse from './childCompon/MainCourse'
  import Recommend from './childCompon/Recommend'
  import Guess from './childCompon/Guess.vue'

  import { getNewCourse } from 'network/home'

  export default {
    name: "Home",
    data() {
      return {
        newData: [],
        guessData: []
      }
    },
    components: {
      MainNavBar,
      FeatureView,
      MainMenu,
      MainCourse,
      Recommend,
      Guess
    },
    created() {
      this.getNewCourse()
    },
    methods: {
      getNewCourse() {
        getNewCourse().then(res => {
          this.newData = res.data.newList
          this.guessData = res.data.bannerList
        })
      }
    }
  }
</script>

<style scoped>
  #home{
    padding-bottom: 1.96rem;
    box-sizing: border-box;
  }
  .main-menu{
    border-bottom: 0.8rem solid #f5f5f5;
  }
</style>
