<template>
  <div class="menu-box">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Menu",
  }
</script>

<style scoped>
  .menu-box{
    display: flex;
    flex-wrap: wrap;
  }
</style>
