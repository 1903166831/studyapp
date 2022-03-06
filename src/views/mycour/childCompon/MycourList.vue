<template>
  <div class="mycour-list">
    <mycour-list-com>
      <mycour-list-item v-for="item in mycourData" :key="item.id" :courseId="item.ID">
        <img slot="poster" :src="item.Cpic" alt="">
        <p slot="title" class="list-item-title">{{item.Cname}}</p>
      </mycour-list-item>
    </mycour-list-com>
  </div>
</template>

<script>
  import MycourListCom from 'components/content/mycourList/MycourListCom'
  import MycourListItem from 'components/content/mycourList/MycourListItem'

  import { getMycourList } from 'network/mycour'

  export default {
    name: "MycourList",
    components: {
      MycourListCom,
      MycourListItem
    },
    data() {
      return {
        mycourData: [],
        params: {
          userName: 'zhang123'
        }
      }
    },
    created() {
      this.getMycourList(this.params)
    },
    methods: {
      getMycourList(params) {
        getMycourList(params).then(res => {
          // console.log(res);
          this.mycourData = res.data
        })
      }
    }
  }
</script>

<style scoped>
  .mycour-list{
    background: #fff;
    padding: 0 0.6rem;
    box-sizing: border-box;
  }

  .mycour-list .list-item-title{
    font-size: 0.6rem;
    color: #000;
  }
</style>
