<template>
  <div class="tab-bar-item" @click="tabBarClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div class="item-text" :style="isActiveColor"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: "#ff0000"
      }
    },
    methods: {
      tabBarClick() {
        if (this.$route.path.indexOf(this.path) === -1) {
          this.$router.push(this.path)
        }
      }
    },
    computed: {
      isActiveColor() {
        return this.$route.path.indexOf(this.path) !== -1 ? { color: this.activeColor } : {}
      },
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
  }
</style>
