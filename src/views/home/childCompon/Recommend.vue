<template>
  <div class="recommend">
    <nav-bar class="recommend-title">
      <p slot="item-left">推荐讲师</p>
    </nav-bar>
    <recommend-com class="recom-com">
      <recommend-item class="recom-item" path="/recommend" v-for="(item, index) in recommendCount" :key="index"/>
    </recommend-com>
  </div>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'
  import RecommendCom from 'components/content/recommend/RecommendCom'
  import RecommendItem from 'components/content/recommend/RecommendItem'

  export default {
    name: "Recommend",
    data() {
      return {
        recommendCount: 5
      }
    },
    components: {
      NavBar,
      RecommendCom,
      RecommendItem,
    }
  }
</script>

<style scoped>
  .recommend{
    padding: 0.8rem 0 0.8rem 0.6rem;
    font-size: 0.6rem;
    color: #333;
  }
  .recom-com{
    margin-top: 0.1rem;
  }
  .recom-item{
    margin-right: 1.2rem;
  }
</style>
