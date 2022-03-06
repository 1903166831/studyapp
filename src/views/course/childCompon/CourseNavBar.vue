<template>
  <nav-bar class="course-nav">
      <p class="page-title" slot="item-left">课程</p>
      <div class="search" slot="item-right">
        <div class="search-ipt">
          <input type="text" placeholder="搜索课程">
          <img src="~assets/img/course_class_search_icon.png" alt="">
        </div>
      </div>
    </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'

  export default {
    name: "CourseNavBar",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .course-nav{
    height: 1.76rem;
    background: #145aee;
    padding: 0 0.6rem;
    box-sizing: border-box;
  }

  .page-title{
    font-size: 0.8rem;
    color: #fff;
  }

  .search{
    width: 10.8rem;
    height: 1.2rem;
  }

  .search-ipt{
    height: 100%;
    background: #5787ee;
    border-radius: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.76rem;
  }

  .search-ipt input{
    background: transparent;
    color: #fff;
  }

  .search-ipt input::placeholder{
    color: #fff;
  }
</style>
