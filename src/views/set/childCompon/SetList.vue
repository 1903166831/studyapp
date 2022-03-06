<template>
  <div class="setList">
    <div class="list">
      <nav-bar class="item">
        <p class="item-name" slot="item-left">手机号</p>
        <p class="item-content" slot="item-right">
          {{phone}}
          <span>></span>
        </p>
      </nav-bar>
      <nav-bar class="item">
        <p class="item-name" slot="item-left">接收推送消息</p>
        <div class="item-content" slot="item-right">
          <div class="btn" :class="{active: isActive}">
            <div class="circu" @click="btn"></div>
          </div>
        </div>
      </nav-bar>
    </div>
    <div class="list">
      <nav-bar class="item">
        <p class="item-name" slot="item-left">通用</p>
        <p class="item-content" slot="item-right">></p>
      </nav-bar>
      <nav-bar class="item">
        <p class="item-name" slot="item-left">联系我们</p>
        <p class="item-content" slot="item-right">></p>
      </nav-bar>
    </div>
    <div class="list">
      <nav-bar class="item">
        <p class="item-name" slot="item-left">清除缓存</p>
        <p class="item-content" slot="item-right">29.51M</p>
      </nav-bar>
    </div>
  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar"

  export default {
    name: "SetList",
    components: {
      NavBar
    },
    data() {
      return {
        isActive: true
      }
    },
    computed: {
      phone() {
        let num = this.$store.state.phoneNum
        let encry = num.slice(0, 3) + "****" + num.substr(-4, 4) + " "
        return encry
      }
    },
    methods: {
      btn() {
        this.isActive = !this.isActive
      }
    }
  }
</script>

<style scoped>
  .list{
    margin-bottom: 0.4rem;
  }

  
  .item{
    padding: 0 0.6rem;
    height: 1.76rem;
    background: #fff;
    box-sizing: border-box;
    font-size: 0.6rem;
    border: 0.02rem solid #f5f5f5;
  }

  .item-name{
    color: #282828;
  }

  .item-content{
    color: #999;
  }

  .item-content span{
    margin-left: 0.4rem;
  }

  .btn{
    width: 1.4rem;
    height: 0.86rem;
    background: #eee;
    border-radius: 0.43rem;
    padding: 0.04rem;
    box-sizing: border-box;
    transition: all 0.3s;
  }

  .btn.active{
    background: #2dd328;
  }

  .btn.active .circu{
    transform: translateX(0.56rem);
  }

  .btn .circu{
    width: 0.78rem;
    height: 100%;
    background: #fff;
    border-radius: 50%;
    transform: translateX(0);
    transition: all 0.3s;
  }
</style>
