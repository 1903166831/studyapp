<template>
  <div class="item-title">
    <div class="title-text">
      <div class="text">
        <div class="name"><slot name="item-name"></slot></div>
        <div class="time"><slot name="item-time"></slot></div>
      </div>
      <div class="pass"><slot name="item-pass"></slot></div>
    </div>
    <div class="title-operation"><slot name="item-operation"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "CourseItemTitle"
  }
</script>

<style scoped>
  .item-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title-operation{
    align-self: flex-end;
  }

  .text{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
</style>
