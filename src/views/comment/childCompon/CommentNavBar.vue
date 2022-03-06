<template>
  <nav-bar class="comment-bar" :isLeftToPage="true" leftPath="/study">
    <img slot="item-left" src="~assets/img/comment_comment_head_back.png" alt="" class="back-icon">
    <p class="title" slot="item-center">写评论</p>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'
  export default {
    name: "CommentNavBar",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .comment-bar{
    height: 1.76rem;
    background: #145aee;
    padding: 0 0.6rem;
    box-sizing: border-box;
    position: relative;
  }

  .comment-bar .back-icon{
    width: 0.64rem;
    vertical-align: middle;
  }

  .back-icon {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0.6rem;
    margin: auto;
  }

  .title{
    color: #fff;
    font-size: 0.6rem;
    text-align: center;
  }
</style>
