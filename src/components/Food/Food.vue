<template>
  <div class="food" v-if="isShow">
    <div class="food-content">
      <div class="image-header">
        <img v-lazy="food.image">
        <p class="foodpanel-desc">{{food.info}}</p>
        <div class="back" @click="toggleShow">
          <i class="iconfont icon-arrow_left"></i>
        </div>
      </div>
      <div class="content_food">
        <h1 class="title">{{food.name}}</h1>
        <div class="detail">
          <span class="sell-count">月售 {{food.sellCount}} 份</span>
          <span class="rating">好评率 {{food.rating}}%</span>
        </div>
        <div class="price">
          <span class="now">￥{{food.price}}</span>
          <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
        </div>
        <div class="cartcontrol-wrapper">
          <CartControl :food="food"/>
        </div>
      </div>
    </div>
    <div class="food-cover" @click="toggleShow"></div>
  </div>
</template>

<script>
  import CartControl from "../CartControl/CartControl"

  export default {
    props:{
      food:Object
    },
    data(){
      return {
        isShow:false
      }
    },
    methods:{
      toggleShow(){
        this.isShow = !this.isShow
      }
    },
    components:{
      CartControl
    }
  }
</script>

<style scoped>

</style>
