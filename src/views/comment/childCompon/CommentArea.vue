<template>
  <div class="box">
    <textarea class="comment-area" cols="30" rows="10" placeholder="吐个槽，交个朋友呗(/=￣ω￣=)/" @input="change" v-model="areaWords"></textarea>
    <p class="wordCount" :style="judgeWords">{{words}}/300</p>
  </div>
</template>

<script>
  export default {
    name: "CommentArea",
    props: {
      words: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        maxWords: 300,
        areaWords: ''
      }
    },
    computed: {
      judgeWords() {
        return this.maxWords <= this.words ? { 'color': 'red' } : { 'color': '#808080'}
      }
    },
    methods: {
      change() {
        this.words = this.areaWords.length
      }
    }
  }
</script>

<style scoped>
  .box{
    padding: 0 0.6rem;
    box-sizing: border-box;

  }

  .box textarea{
    width: 100%;
    height: 10rem;
    border-radius: 0.2rem;
    font-size: 0.46rem;
    padding: 0.4rem;
    box-sizing: border-box;
    border:  0.02rem solid  #145aee;
  }

  .comment-area::placeholder{
    color: #808080;
    font-size: 0.46rem;
  }

  .wordCount{
    text-align: right;
    font-size: 0.4rem;
    color: #d1d1d1;
  }
</style>
