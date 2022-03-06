<template>
  <tab-bar class="tab-bar">
    <tab-bar-item class="tab-bar-item" activeColor="#145aee" path="/home">
      <template v-slot:item-icon>
        <img src="~assets/img/01.png" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/001.png" alt="">
      </template>
      <template v-slot:item-text>
        <p class="tab-bar-text">首页</p>
      </template>
    </tab-bar-item>
    <tab-bar-item class="tab-bar-item" activeColor="#145aee" path="/course">
      <template v-slot:item-icon>
        <img src="~assets/img/02.png" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/002.png" alt="">
      </template>
      <template v-slot:item-text>
        <p class="tab-bar-text">课程列表</p>
      </template>
    </tab-bar-item>
    <tab-bar-item class="tab-bar-item" activeColor="#145aee" path="/mycour">
      <template v-slot:item-icon>
        <img src="~assets/img/03.png" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/003.png" alt="">
      </template>
      <template v-slot:item-text>
        <p class="tab-bar-text">我的课程</p>
      </template>
    </tab-bar-item>
    <tab-bar-item class="tab-bar-item" activeColor="#145aee" path="/profile">
      <template v-slot:item-icon>
        <img src="~assets/img/04.png" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/004.png" alt="">
      </template>
      <template v-slot:item-text>
        <p class="tab-bar-text">我的</p>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabBar/TabBar"
  import TabBarItem from "components/common/tabBar/TabBarItem"

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
  .tab-bar{
    background: #fff;
    height: 1.96rem;
    box-shadow: 0 -0.2rem 0.4rem -0.4rem rgb(0, 0, 0);
  }
  .tab-bar-item img{
    width: 0.8rem;
  }
  .tab-bar-text{
    font-size: 0.44rem;
  }
</style>
