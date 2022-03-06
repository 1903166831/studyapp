<template>
  <div class="course-com">
    <course-list-item class="list-item" v-for="item in listData" :key="item.id" :courseId="item.ID" :itemData="item" isRaius="0.6rem">
      <course-item-title class="item-title">
        <p class="course-name" slot="item-name">{{item.Cname}}</p>
        <p class="course-time" slot="item-time">三天前</p>
        <div class="course-pass" slot="item-pass">
          <img src="~assets/img/course_class_study_icon.png" alt="">
          <span>2058人学过</span>
        </div>
        <div class="course-operation" slot="item-operation">
          <img src="~assets/img/course_class_comment_icon.png" alt="">
          <span>113</span>
          <img src="~assets/img/course_class_collect_icon.png" alt="">
        </div>
      </course-item-title>
    </course-list-item>
  </div>
</template>

<script>
  import CourseListItem from 'components/content/courseList/CourseListItem'
  import CourseItemTitle from 'components/content/courseList/CourseItemTitle'

  export default {
    name: "CourseCompon",
    props: {
      listData: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      CourseListItem,
      CourseItemTitle
    }
  }
</script>

<style scoped>
  .course-com{
    padding: 0 0.6rem;
    box-sizing: border-box;
  }

  .list-item{
    margin-bottom: 0.72rem;
  }

  .item-title img{
    width: 0.48rem;
    vertical-align: middle;
  }

  .course-name{
    font-size: 0.64rem;
    color: #3d3d3d;
    font-weight: bold;
    margin-top: 0.5rem;
  }

  .course-time{
    font-size: 0.48rem;
    color: #8f8f8f;
    margin: 0.15rem 0 0 1rem;
  }

  .item-title span{
    margin: 0 0.2rem;
    font-size: 0.48rem;
    color: #8f8f8f;
  }
</style>
