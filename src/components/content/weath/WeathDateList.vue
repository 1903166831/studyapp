<template>
  <div class="weath-date">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "WeathContent",
    props: {
      date: {
        type: Object,
        default() {
          return {}
        }
      },
      imgSrc: {
        type: String,
        default: ''
      }
    },
  }
</script>

<style scoped>
  .weath-date{
    display: flex;
    justify-content: space-around;
  }
</style>
