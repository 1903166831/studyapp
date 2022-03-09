<template>
  <div class="weath-content">
    <course-item-title class="item-title">
      <p class="nowTemp" slot="item-name">{{nowTempData.temperature}}℃</p>
      <p class="nowDate" slot="item-pass">
        <img :src="nowIconSrc" alt="">
        <span>{{nowWeathType}}</span>
        <span>|</span>
        <span>{{date}}</span>
      </p>
    </course-item-title>
    <course-contral-list class="weath-item">
      <div class="future" v-for="(item, index) in weathListData" :key="item.id">
        <p class="date">{{dateStr(item.date, index)}}</p>
        <img :src="bindSrc(item.type)" alt="">
        <p class="temp">{{cutStr(item.high)}}/{{cutStr(item.low)}}℃</p>
      </div>
    </course-contral-list>
  </div>
</template>

<script>
  import CourseItemTitle from 'components/content/courseList/CourseItemTitle'
  import CourseContralList from 'components/content/courseContral/CourseContralList'

  export default {
    name: "WeathContent",
    props: {
      futureData: {
        default() {
          return {}
        }
      },
      nowTempData: {
        default() {
          return []
        }
      }
    },
    data() {
      return {
        nowIconSrc: '',
        nowWeathType: '',
        date: '',
        weathListData: ''
      }
    },
    components: {
      CourseItemTitle,
      CourseContralList
    },
    created() {
      // this.nowWeather = this.nowTempData.weather
      // console.log(futureData);
    },
    mounted() {
      // console.log(this.nowTempData.weather);

    },
    watch: {
      nowTempData: function() {
        // reporttime
        const type = this.nowTempData
        this.nowIconSrc = require('@/assets/img/' + type.weather + '.png')
        this.nowWeathType = type.weather
        this.date = type.reporttime.slice(5, 10)
        // console.log(type.reporttime.slice(5, 10));
      },
      futureData: function() {
        this.weathListData = this.futureData.data.forecast.slice(0, 4)
      }
    },
    computed: {
      // bindSrc() {
      //   return require('@/assets/img/' + this.nowWeather + '.png')
      // }
    },
    methods: {
      cutStr(str) {
        return parseInt(str.slice(3))
      },
      bindSrc(str) {
        return require('@/assets/img/' + str + '.png')
      },
      dateStr(str, index) {
        if (index) {
          return '周' + str.slice(str.length - 1)
        } else {
          return '今天'
        }
      }
    }
  }
</script>

<style scoped>
  .weath-content{
    height: 4.7rem;
    color: #fff;
    font-size: 0.4rem;
    padding: 0 0.36rem;
    box-sizing: border-box;
    background: url(~assets/img/weather_poster_bg.png) no-repeat center;
    background-size: 100% auto;
  }
  .item-title{
    margin-bottom: 0.48rem;
  }
  .nowDate{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nowDate img{
    width: 0.66rem;
  }
  .nowDate span{
    margin-left: 0.3rem;
  }
  .nowTemp{
    font-size: 0.76rem;
    margin: 0.36rem 0 0.2rem;
  }
  .weath-item{
    text-align: center;
  }
  .weath-item .future{
    width: 2.4rem;
  }
  .future img{
    width: 0.56rem;
  }
</style>
