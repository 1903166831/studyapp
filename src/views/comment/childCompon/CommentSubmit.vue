<template>
  <div class="submit">
    <p>{{text}}</p>
  </div>
</template>

<script>
  export default {
    name: "CommentSubmit",
    props: {
      text: {
        type: String,
        default: '提交'
      }
    }
  }
</script>

<style scoped>
  .submit p{
    width: 11.6rem;
    line-height: 1.76rem;
    border-radius: 0.88rem;
    background: #145aee;
    color: #fff;
    font-size: 0.6rem;
    text-align: center;
    margin: auto;
  }

</style>
