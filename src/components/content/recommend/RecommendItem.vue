<template>
  <div class="recommend-item" @click="recommendClick">
    <img src="~assets/img/recommend_poster1.png" alt="">
  </div>
</template>

<script>
export default {
  name: "RecommendItem",
  props: {
    path: String
  },
  methods: {
    recommendClick() {
      // console.log("recommendItem");
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
  .recommend-item{
    width: 11.2rem;
  }
</style>
