<template>
  <div class="on">
    <ShopHeader/>
    <div class="tab bottom-border-1px">
      <div class="tab-item">
        <router-link to="/shop/goods" replace>点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/ratings" replace>评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/info" replace>商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  import ShopHeader from "../../components/ShopHeader/ShopHeader"
  import ShopGoods from "./ShopGoods/ShopGoods"
  import ShopRatings from "./ShopRatings/ShopRatings"
  import ShopInfo from "./ShopInfo/ShopInfo"

  export default {
    mounted() {
      this.$store.dispatch('getShopInfo')
    },
    components:{
      ShopHeader,
      ShopGoods,
      ShopRatings,
      ShopInfo
    }
  }
</script>

<style>

</style>
