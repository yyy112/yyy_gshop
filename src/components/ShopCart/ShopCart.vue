<template>
  <div>
    <div class="shopcart">
      <div class="contentt">
        <div class="content-left" @click="toggleShow">
          <div class="logo-wrapper">
            <div class="logo" :class="{highlight:totalCount}">
              <i class="iconfont icon-shopping_cart" :class="{highlight:totalCount}"></i>
            </div>
            <div class="num" v-if="totalCount">{{totalCount}}</div>
          </div>
          <div class="price" :class="{highlight:totalPrice}">￥{{totalPrice}}</div>
          <div class="desc">另需配送费￥{{info.deliveryPrice}} 元</div>
        </div>
        <div class="content-right">
          <div class="pay" :class="payClass">
            {{payText}}
          </div>
        </div>
      </div>
      <transition name="swiper">
        <div class="shopcart-list" v-show="listShow">
          <div class="list-header">
            <h1 class="title">购物车</h1>
            <span class="empty" @click="clearCart">清空</span>
          </div>
          <div class="list-content">
            <ul>
              <li class="food" v-for="(food,index) in cartFoods" :key="index">
                <span class="name">{{food.name}}</span>
                <div class="price"><span>￥{{food.price}}</span></div>
                <div class="cartcontrol-wrapper">
                  <div class="cartcontrol">
                    <CartControl :food="food"/>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <transition name="fades">
      <div class="list-mask" v-show="listShow" @click="toggleShow"></div>
    </transition>
  </div>
</template>

<script>
  import {MessageBox} from 'mint-ui'
  import {mapState,mapGetters} from 'vuex'
  import BScroll from 'better-scroll'

  import CartControl from "../CartControl/CartControl"
  export default {
    data(){
      return{
        isShow:false
      }
    },

    computed:{
      ...mapState(['cartFoods','info']),
      ...mapGetters(['totalCount','totalPrice']),
      payClass(){
        const {totalPrice} = this
        const {minPrice} = this.info
        return totalPrice>=minPrice ? 'enough' : 'not-enough'
      },
      payText(){
        const {totalPrice} = this
        const {minPrice} = this.info
        if(totalPrice == 0){
          return `￥${minPrice}元起送`
        }else if(totalPrice<minPrice){
          return `还差￥${minPrice-totalPrice}元起送`
        }else{
          return '去结算'
        }
      },
      listShow(){
        // 如果总数量为0，直接不显示
        if(this.totalCount===0){
          this.isShow = false
          return false
        }
        if(this.isShow){
          this.$nextTick(() => {
            // 实现BScroll的实例是一个单例
            if(!this.scroll){
              this.scroll = new BScroll('.list-content',{
                click:true
              })
            }else{
              this.scroll.refresh() // 让滚动条刷新一下：重新统计内容的高度
            }

          })
        }
        return this.isShow
      }
    },
    methods:{
      toggleShow(){
        // 自己有当总数量大于0时才切换
        if(this.totalCount>0){
          this.isShow = !this.isShow
        }
      },
      clearCart(){
        /*MessageBox.confirm('确认清空购物车吗').then(action => {
          this.$store.dispatch('clearCart')
        })*/
        this.$store.dispatch('clearCart')
      }
    },
    components:{
      CartControl
    }
  }
</script>

<style scoped>

</style>
