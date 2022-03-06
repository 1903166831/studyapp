<template>
  <div id="profile">
    <profile-nav-bar class="nav-bar"/>
    <profile-feature class="feature"/>
    <profile-set-list/>
  </div>
</template>

<script>
  import ProfileNavBar from './childCompon/ProfileNavBar.vue'
  import ProfileFeature from './childCompon/ProfileFeature.vue'
  import ProfileSetList from './childCompon/ProfileSetList.vue'

  export default {
    name: "Profile",
    components: {
      ProfileNavBar,
      ProfileFeature,
      ProfileSetList
    }
  }
</script>

<style scoped>
  #profile{
    background: #fff;
    padding: 0 0.6rem 1.96rem;
    box-sizing: border-box;
  }

  .nav-bar{
    padding: 0.56rem 0 1rem;
  }

  .feature{
    margin-bottom: 1.48rem;
  }
</style>
