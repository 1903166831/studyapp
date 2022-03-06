<template>
  <div class="guess">
    <nav-bar class="guess-compon">
      <p class="guess-title" slot="item-left">猜你喜欢</p>
      <p class="guess-link" slot="item-right">更多 ></p>
    </nav-bar>
    <course-list-item v-for="item in guessData" :key="item.id" :itemData="item">
      <course-item-title>
        <p class="item-name" slot="item-name">{{item.Cname}}</p>
        <p class="item-pass" slot="item-pass">视频时长： 20分50秒</p>
        <img slot="item-operation" src="~assets/img/collect_img.png" alt="">
      </course-item-title>
    </course-list-item>
  </div>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'
  import CourseListItem from 'components/content/courseList/CourseListItem'
  import CourseItemTitle from 'components/content/courseList/CourseItemTitle'


  export default {
    name: "Guess",
    props: {
      guessData: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      NavBar,
      CourseListItem,
      CourseItemTitle
    }
  }
</script>

<style scoped>
  .guess{
    background: #fff;
    padding: 0 0.6rem 0.1rem;
    box-sizing: border-box;
  }

  .guess-compon{
    line-height: 1.44rem;
  }

  .guess-title{
    font-size: 0.6rem;
    color: #333;
  }

  .guess-link{
    font-size: 0.4rem;
    color: #7a7979;
  }

  .item-pass{
    font-size: 0.44rem;
    color: #8f8f8f;
  }
</style>
