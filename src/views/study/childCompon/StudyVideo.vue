<template>
  <div class="study-video">
    <video class="video" :controls="controls" :autoplay="autoplay" :muted="autoplay" src=""></video>
  </div>
</template>

<script>
  export default {
    name: "StudyVideo",
    props: {
      videoData: '',
      controls: {
        type: Boolean,
        default: false
      },
      // 视频自动播放
      autoplay: {
        type: Boolean,
        default: false
      },
    }
  }
</script>

<style scoped>
  .video{
    width: 100%;
    background: #fff;
    vertical-align: middle;
    padding-bottom: 0.3rem;
  }
</style>
