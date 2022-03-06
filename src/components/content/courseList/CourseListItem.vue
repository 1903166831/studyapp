<template>
  <div class="list-item" @click="courseItemClick">
    <div class="course-poster">
      <img :style="{ 'border-radius': isRaius }" :src="itemData.Cpic" alt="">
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "CourseListItem",
    props: {
      itemData: {
        type: Object,
        deffult() {
          return {}
        }
      },
      isRaius: {
        type: String,
        default: ''
      },
      courseId: Number
    },
    methods: {
      courseItemClick() {
        // console.log(this.courseId);
        // 动态路由
        this.$router.push("/study/" + this.courseId)
      }
    }
  }
</script>

<style scoped>
  .course-poster img{
    width: 100%;
  }
</style>
