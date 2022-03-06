<template>
  <course-contral-list class="contral-list">
    <course-contral-item class="contral-item" @contral="change" v-for="(item, index) in listData" :currentIndex="currentIndex" :key="item" :index="index" :itemText="item"/>
  </course-contral-list>
</template>

<script>
  import CourseContralList from 'components/content/courseContral/CourseContralList'
  import CourseContralItem from 'components/content/courseContral/CourseContralItem'

  export default {
    name: "StudyContral",
    components: {
      CourseContralList,
      CourseContralItem
    },
    data() {
      return {
        listData: ['目录', '详情', '评价'],
        currentIndex: 0
      }
    },
    methods: {
      change(data) {
        this.currentIndex = data.index
      }
    }
  }
</script>

<style scoped>
  .contral-list{
    height: 1.72rem;
    background: #fff;
  }
  .contral-item{
    flex: 1;
    text-align: center;
  }
</style>
