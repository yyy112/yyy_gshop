<template>
  <div class="shop_container">
    <ul class="shop_list" v-if="shops.length">
        <li class="shop_li border-1px" v-for="(shop,index) in shops"
            :key="index" @click="$router.push('/shop')">
          <a>
            <div class="shop_left">
              <img class="shop_img" :src="beseImageUrl+shop.image_path">
            </div>
            <div class="shop_right">
              <section class="shop_detail_header">
                <h4 class="shop_title ellipsis">{{shop.name}}</h4>
                <ul class="shop_detail_ul">
                  <li class="supports" v-for="(support,index) in shop.supports" :key="index">
                    {{support.icon_name}}
                  </li>
                </ul>
              </section>
              <section class="shop_rating_order">
                <section class="shop_rating_order_left">
                  <Star :score="shop.rating" :size="24"/>
                  <div class="rating_section">
                    {{shop.rating}}
                  </div>
                  <div class="order_section">
                 月售{{shop.recent_order_num}}
                  </div>
                </section>
                <section class="shop_rating_order_right">
                  <span class="delivery_style delivery_right">{{shop.delivery_mode.text}}</span>
                </section>
              </section>
              <section class="shop_distance">
                <p class="shop_delivery_msg">
                  <span>¥{{shop.float_minimum_order_amount}}起送</span>
                  <span class="segmentation">/</span>
                  <span>配送费约¥{{shop.float_delivery_fee}}</span>
                </p>
              </section>
            </div>
          </a>
        </li>
      </ul>
    <ul  v-else>
      <li v-for="item in 6">
        <img src="./images/shop_back.svg" alt="back">
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Star from '../Star/Star'
  export default {
    data(){
      return {
        beseImageUrl:'http://cangdu.org:8001/img/'
      }
    },
    computed:{
      ...mapState(['shops'])
    },
    components:{
      Star
    }
  }
</script>

<style>

</style>
