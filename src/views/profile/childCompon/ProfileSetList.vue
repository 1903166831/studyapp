<template>
  <mycour-list-com class="set-list">
    <set-list class="list-item" v-for="(item, index) in setData" :key="index" :path="item.path">
      <img slot="icon" :src="bindSrc(item.iconSrc)" alt="">
      <p slot="text">{{item.text}}</p>
    </set-list>
  </mycour-list-com>
</template>

<script>
  import MycourListCom from 'components/content/mycourList/MycourListCom'
  import SetList from 'components/content/setList/SetList'

  export default {
    name: "ProfileSetList",
    components: {
      MycourListCom,
      SetList
    },
    data() {
      return {
        setData: [
          { iconSrc: 'personal_study_icon.png', text: '我的已学', path: '' },
          { iconSrc: 'personal_download_icon.png', text: '我的下载', path: '' },
          { iconSrc: 'personal_collect_icon.png', text: '我的收藏', path: '' },
          { iconSrc: 'personal_follow_icon.png', text: '我的关注', path: '' },
          { iconSrc: 'personal_praise_icon.png', text: '我的点赞', path: '' },
          { iconSrc: 'personal_album_icon.png', text: '专辑', path: '' },
          { iconSrc: 'personal_set_icon.png', text: '设置', path: '/set' }
        ]      
      }
    },
    methods: {
      bindSrc(src) {
        return require('@/assets/img/' + src)
      }
    }
  }
</script>

<style scoped>
  .list-item{
    height: 2.12rem;
    border-bottom: 0.02rem solid #f5f5f5;
  }

  .list-item img{
    width: 0.72rem;
    margin: 0 0.5rem 0 0.3rem;
  }

  .list-item p{
    font-size: 0.6rem;
  }
</style>
