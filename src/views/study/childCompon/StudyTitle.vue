<template>
  <course-item-Title class="study-title">
    <p class="video-cate" slot="item-name">字体设计</p>
    <p class="video-name" slot="item-time">{{courseData.Cname}}</p>
    <p class="video-tag" slot="item-pass">
      <span>难度等级</span>
      <span>中等</span>
      <span>|</span>
      <span>时长：</span>
      <span>10：00</span>
    </p>
  </course-item-Title>
</template>

<script>
  import CourseItemTitle from 'components/content/courseList/CourseItemTitle'

  export default {
    name: "StudyTitle",
    props: {
      courseData: ''
    },
    components: {
      CourseItemTitle
    }
  }
</script>

<style scoped>
  .study-title{
    background: #fff;
    padding: 0 0.6rem;
    box-sizing: border-box;
    border-bottom: 0.32rem solid #f2f2f2;
  }

  .video-cate{
    width: 2.7rem;
    font-size: 0.48rem;
    color: #145aee;
    text-align: center;
    line-height: 0.88rem;
    background: #e7eefd;
    border-radius: 0.44rem;
    margin-right: 1rem;
  }

  .video-name{
    color: #333;
    font-size: 0.68rem;
  }

  .video-tag{
    margin: 0.3rem 0;
  }

  .video-tag span{
    font-size: 0.6rem;
    color: #b2b2b2;
    margin: 0 0.1rem;
  }
</style>
