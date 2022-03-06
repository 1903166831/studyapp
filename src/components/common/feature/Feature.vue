<template>
  <div class="feature" @click="featureClick">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Feature",
    props: {
      path: {
        type: String,
        default: ''
      }
    },
    methods: {
      featureClick() {
        if (this.path === '') return
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .feature img{
    width: 100%;
  }
</style>
