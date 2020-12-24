<template>
    <div class="footer_guide">
      <span class="guide_item" :class="{on:'/msite'===$route.path}" @click="goTo('/msite')" >
        <span class="item_icon">
          <i class="iconfont icon-waimai"></i>
        </span>
        <span>外卖</span>
      </span>
      <span class="guide_item" :class="{on:'/search'===$route.path}" @click="goTo('/search')">
        <span class="item_icon">
          <i class="iconfont icon-search"></i>
        </span>
        <span>搜索</span>
      </span>
      <span class="guide_item" :class="{on:'/order'===$route.path}" @click="goTo('/order')">
        <span class="item_icon">
          <i class="iconfont icon-dingdan"></i>
        </span>
        <span>订单</span>
      </span>
      <span class="guide_item" :class="{on:'/profile'===$route.path}" @click="goTo('/profile')">
        <span class="item_icon">
          <i class="iconfont icon-geren"></i>
        </span>
        <span>我的</span>
      </span>
    </div>
</template>

<script>
    export default {

      methods:{
        goTo(path){
          this.$router.replace(path)
        }
      }
    }
</script>

<style>

</style>
