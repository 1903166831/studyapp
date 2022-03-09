<template>
  <div class="mycour-item" @click="mycourItemClick">
    <div class="mycour-poster">
      <slot name="poster"></slot>
      <img src="~assets/img/my_course_start.png" alt="" class="play-icon">
      <div class="cover"></div>
    </div>
    <div class="mycour-info">
      <p class="mycour-title">
        <slot name="title"></slot>
      </p>
      <p class="mycour-tag">
        <span class="tag-item">基础</span>
        <span class="tag-item">入门</span>
      </p>
      <p class="last-time">8天前</p>
      <p class="last-time progress">学习进度 33%</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MycourListItem",
    props: {
      courseId: Number
    },
    data() {
      return {
        
      }
    },
    methods: {
      mycourItemClick() {
        this.$store.commit('editCourId', this.courseId)
        this.$router.push("/study/" + this.courseId)
        // console.log(this.courseId);
      }
    }
  }
</script>

<style scoped>
  .mycour-item{
    border-bottom: 0.02rem solid #e6e6e6;
    padding: 0.4rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .mycour-poster{
    width: 6.46rem;
    position: relative;
  }

  .mycour-poster img{
    width: 6.46rem;
  }

  .mycour-poster .cover{
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  .mycour-poster .play-icon{
    width: 1.3rem;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    z-index: 2;
  }

  .mycour-info{
    width: 6.9rem;
    height: 3rem;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
  }

  .mycour-info .mycour-tag{
    width: 2.4rem;
    height: 0.6rem;
    border: 0.02rem solid #145aee;
    border-radius: 0.1rem;
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 0.4rem;
  }

  .mycour-info p {
    width: 100%;
    font-size: 0.4rem;
    color: #808080;
  }

  .mycour-tag .tag-item{
    flex: 1;
    color: #145aee;
  }

  .mycour-tag .tag-item:last-child{
    background: #145aee;
    color: #fff;
  }
</style>
