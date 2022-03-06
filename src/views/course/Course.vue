<template>
  <div id="course">
    <course-nav-bar/>
    <course-contral @courseLitsData="getListData"/>
    <course-compon :listData="listData"/>
  </div>
</template>

<script>
  import CourseNavBar from './childCompon/CourseNavBar.vue'
  import CourseContral from './childCompon/CourseContral.vue'
  import CourseCompon from './childCompon/CourseCompon.vue'

  export default {
    name: "Course",
    components: {
      CourseNavBar,
      CourseContral,
      CourseCompon
    },
    data() {
      return {
        listData: []
      }
    },
    methods: {
      getListData(data) {
        this.listData = data
      }
    }
  }
</script>

<style scoped>
  #course{
    padding-bottom: 1.96rem;
    box-sizing: border-box;
  }
</style>
