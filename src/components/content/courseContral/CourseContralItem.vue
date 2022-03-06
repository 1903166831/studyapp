<template>
  <div class="contral-item" @click="contralClick">
    <p :class="{ 'active': isActive }">{{itemText}}</p>
  </div>
</template>

<script>
  export default {
    name: "CourseContralItem",
    props: {
      itemText: String,
      index: {
        type: Number,
        default: 0
      },
      sysId: {
        type: [Number, String],
        default: ''
      },
      currentIndex: [Number, String]
    },
    methods: {
      contralClick() {
        this.$emit("contral", {
          index: this.index,
          sysId: this.sysId
        })
        // console.log(this.sysId);
        // console.log(this.currentIndex);
      }
    },
    computed: {
      isActive() {
        return this.currentIndex === this.index
      }
    }
  }
</script>

<style scoped>
  p{
    width: fit-content;
    margin: auto;
    height: 100%;
  }
  .active{
    font-weight: bold;
    color: #404040;
    border-bottom: 0.08rem solid #145aee;
  }
</style>
