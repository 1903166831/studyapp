<template>
  <div id="mycour">
    <mycour-nav-bar/>
    <mycour-list/>
  </div>
</template>

<script>
  import MycourNavBar from './childCompon/MycourNavBar.vue'
  import MycourList from './childCompon/MycourList.vue'

  export default {
    name: "Mycour",
    components: {
      MycourNavBar,
      MycourList
    }
  }
</script>

<style scoped>
  #mycour{
    padding-bottom: 1.96rem;
    box-sizing: border-box;
  }
</style>
