<template>
  <div class="setList" @click="toSet">
    <div class="set-icon"><slot name="icon"></slot></div>
    <div class="set-text"><slot name="text"></slot></div>
    <div class="set-icon2"><slot name="icon2"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "SetList",
    props: {
      path: {
        type: String,
        default: ''
      }
    },
    methods: {
      toSet() {
        if (this.path !== '') {
          this.$router.push(this.path)
        }
      }
    }
  }
</script>

<style scoped>
  .setList{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .setList .set-text{
    flex: 1;
  }
</style>
