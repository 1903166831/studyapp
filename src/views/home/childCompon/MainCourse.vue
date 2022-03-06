<template>
  <div class="new-course">
    <nav-bar>
      <template v-slot:item-left>
        <p class="course-title">最新课程</p>
      </template>
    </nav-bar>
    <div class="course-list">
      <course-list-item class="course-item" v-for="item in newData" :key="item.id" :itemData="item">
        <course-item-title class="item-title">
          <template v-slot:item-name>
            <p class="item-name">{{item.Cname}}</p>
          </template>
        </course-item-title>
      </course-list-item>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'
  import CourseListItem from 'components/content/courseList/CourseListItem'
  import CourseItemTitle from 'components/content/courseList/CourseItemTitle'

  export default {
    name: "CourseList",
    props: {
      newData: {
        type: Array,
        deffult() {
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
  .new-course{
    padding: 0 0.6rem;
    box-sizing: border-box;
    background: #fff;
  }
  .course-title{
    line-height: 1.44rem;
    color: #333;
    font-size: 0.6rem;
  }

  .course-list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .course-item{
    flex: 0 48%;
  }

  .item-title{
    margin: 0.15rem 0 0.3rem;
  }

  .course-name{
    margin: 0.15rem 0 0.3rem;
    color: #333;
  }
</style>
