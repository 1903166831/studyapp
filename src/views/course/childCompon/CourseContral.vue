<template>
  <course-contral-list class="contral-list">
    <course-contral-item class="contral-item" itemText="全部" @contral="reLoadList" :currentIndex="currentIndex"/>
    <course-contral-item class="contral-item" 
                         v-for="(item, index) in courCateData" 
                         :key="item.sysId" 
                         :itemText="item.title" 
                         :sysId="item.sysId"
                         :index="index + 1"
                         @contral="reLoadList" 
                         @click="itemClick(item.sysId)"
                         :currentIndex="currentIndex"/>
  </course-contral-list>
</template>

<script>
  import CourseContralList from 'components/content/courseContral/CourseContralList'
  import CourseContralItem from 'components/content/courseContral/CourseContralItem'

  import { getCourseCate, getCourseList } from 'network/course.js'

  export default {
    name: "CourseContral",
    components: {
      CourseContralList,
      CourseContralItem
    },
    data() {
      return {
        courCateData: [],
        params: {
          sysId: ''
        },
        currentIndex: 0
      }
    },
    created() {
      // 网络请求
      this.getCourseCate()
      this.getCourseList(this.params)
    },
    methods: {
      reLoadList(id) {
        this.params.sysId = id.sysId
        this.getCourseList(this.params)
        this.currentIndex = id.index
      },
      // itemClick(id) {
      //   var id = id || ''
      //   console.log(this.currentIndex);
      // },



      // 网络请求
      getCourseCate() {
        getCourseCate().then(res => {
          this.courCateData = res.data
        })
      },
      getCourseList(params) {
        getCourseList(params).then(res => {
          // 发送数据
          this.$emit("courseLitsData", res.data.list)
          // console.log(res.data.list);
        })
      }
    }
  }
</script>

<style scoped>
  .contral-list{
    height: 1.76rem;
    padding: 0 0.6rem;
    box-sizing: border-box;
  }

  .contral-item{
    font-size: 0.6rem;
    color: #a6a6a6;
  }
</style>
