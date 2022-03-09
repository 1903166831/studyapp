<template>
  <div class="recommend">
    <nav-bar class="recommend-title">
      <p slot="item-left">推荐讲师</p>
    </nav-bar>
    <!-- <recommend-com class="recom-com"> -->
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img src="~assets/img/recommend_poster1.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/img/recommend_poster1.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/img/recommend_poster1.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/img/recommend_poster1.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="~assets/img/recommend_poster1.png" alt="">
      </swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
    <!-- </recommend-com> -->
  </div>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'
  import RecommendCom from 'components/content/recommend/RecommendCom'
  import RecommendItem from 'components/content/recommend/RecommendItem'

  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

  import 'swiper/css/swiper.css'


  

  export default {
    name: "Recommend",
    data() {
      return {
        recommendCount: 5,
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true
          // Some Swiper option/callback...
        }
      }
    },
    components: {
      NavBar,
      RecommendCom,
      RecommendItem,
      Swiper,
      SwiperSlide
    },
    directives: {
      // swiper: directive
    },
    computed: {
      // swiper() {
      //   return this.$refs.mySwiper.$swiper
      // }
    }
  }
</script>

<style scoped>
  .recommend{
    padding: 0.8rem 0 0.8rem 0.6rem;
    font-size: 0.6rem;
    color: #333;
  }
  .recom-com{
    margin-top: 0.1rem;
  }
  .recom-item{
    margin-right: 1.2rem;
  }
</style>
