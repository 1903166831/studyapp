<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  .tab-bar{
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 3;
  }
</style>
