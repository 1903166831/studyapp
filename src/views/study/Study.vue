<template>
  <div id="study" >
    <study-nav-bar/>
     <!-- :videoData="courseData.Vlist[0]" -->
    <study-video/>
    <study-title :courseData="courseData"/>
    <study-contral/>
  </div>
</template>

<script>
  import StudyNavBar from './childCompon/StudyNavBar.vue'
  import StudyVideo from './childCompon/StudyVideo.vue'
  import StudyTitle from './childCompon/StudyTitle.vue'
  import StudyContral from './childCompon/StudyContral.vue'

  import { getStudyData } from 'network/study'

  export default {
    name: "Study",
    components: {
      StudyNavBar,
      StudyVideo,
      StudyTitle,
      StudyContral
    },
    data() {
      return{
        params: {
         userName: '',
         courseId: 1
        },
        courseData: ''
      }
    },
    created() {
      // this.params.userName = this.$store.state.userName
      this.params.courseId = this.$route.params.id
      this.getStudyData(this.params)
      // console.log(this.params);
      // console.log(this.$route.params.id);
    },
    methods: {
      // btnClick() {
      //   console.log(this.courseId);
      // },

      // 网络请求数据
      getStudyData(params) {
        getStudyData(params).then(res => {
          this.courseData = res.data
          // console.log(this.courseData);
        })
      }
    }
  } 
</script>

<style scoped>

</style>
