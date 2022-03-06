<template>
  <div class="contral">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "CourseContralList",
    
  }
</script>

<style scoped>
  .contral{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
