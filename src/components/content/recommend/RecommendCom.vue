<template>
  <div class="recommend-com">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "RecommendCom"
  }
</script>

<style scoped>
  .recommend-com{
    width: 100%;
    overflow: scroll;
    display: flex;
  }
</style>
