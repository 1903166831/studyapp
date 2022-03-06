<template>
  <div class="nav-bar">
    <div class="left" v-if="isLeftShow" @click="leftToPage"><slot name="item-left"></slot></div>
    <div class="center" v-if="isCenterShow"><slot name="item-center"></slot></div>
    <div class="right" v-if="isRightShow"><slot name="item-right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    props: {
      isLeftShow: {
        type: Boolean,
        default: true
      },
      isRightShow: {
        type: Boolean,
        default: true
      },
      isCenterShow: {
        type: Boolean,
        default: true
      },
      // 左插件的路由获取
      leftPath: String,
      isLeftToPage: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      // 路由
      leftToPage() {
        if (this.isLeftToPage) {
          this.$router.push(this.leftPath)
        }
      }
    }
  }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
  .center{
    flex: 1;
  }
</style>
