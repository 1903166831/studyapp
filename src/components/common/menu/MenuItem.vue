<template>
  <div class="menu-item">
    <div class="icon"><slot name="icon"></slot></div>
    <div class="text"><slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "MenuItem"
  }
</script>

<style scoped>
  .menu-item{
    text-align: center;
  }
</style>
