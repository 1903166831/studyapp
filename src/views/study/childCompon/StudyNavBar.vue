<template>
  <nav-bar class="study-bar">
    <div class="tab-operation" slot="item-left">
      <img src="~assets/img/study_collect_icon.png" alt="">
      <p class="operation">收藏</p>
    </div>
    <div class="tab-btn" slot="item-center" @click="buy">
      <p class="btn">立即购买</p>
    </div>
    <div class="tab-operation" slot="item-right" @click="toComment">
      <img src="~assets/img/study_comment_icon.png" alt="">
      <p class="operation">评价</p>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'

  export default {
    name: "StudyTabBar",
    components: {
      NavBar
    },
    methods: {
      buy() {
        console.log('StudyNavBar');
      },
      toComment() {
        console.log('StudyNavBar');
        this.$router.push("/comment")
      }
    }
  }
</script>

<style scoped>

  .study-bar{
    height: 1.96rem;
    background: #fff;
    padding: 0 0.6rem;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 6;
    box-shadow: 0 -0.2rem 0.4rem -0.4rem #000;
  }

  .tab-operation{
    margin: 0 0.56rem
  }

  .tab-btn p{
    width: 8.9rem;
    line-height: 1.56rem;
    background: #145aee;
    color: #fff;
    font-size: 0.68rem;
    margin: auto;
    border-radius: 0.78rem;
  }

  .tab-operation img{
    width: 0.9rem;
  }

  .tab-operation p{
    font-size: 0.44rem;
    color: #b2b2b2;
  }
</style>
