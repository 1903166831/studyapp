<template>
  <div id="comment">
    <comment-nav-bar/>
    <comment-area class="comment-area"/>
    <comment-submit class="submit"/>
  </div>
</template>

<script>
  import CommentNavBar from './childCompon/CommentNavBar.vue'
  import CommentArea from './childCompon/CommentArea.vue'
  import CommentSubmit from './childCompon/CommentSubmit.vue'

  export default {
    name: "Comment",
    components: {
      CommentNavBar,
      CommentArea,
      CommentSubmit
    }
  }
</script>

<style scoped>
  #comment{
    background: #fff;
  }

  .comment-area{
    margin-top: 0.68rem;
  }

  .submit{
    margin-top: 1rem;
  }
</style>
