<template>
  <div class="ratings" ref="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{info.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家 {{info.rankRate}}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <Star :score="info.serviceScore" :size="36" />
            <span class="score">{{info.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <Star :score="info.foodScore" :size="36" />
            <span class="score">{{info.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{info.deliveryTime}} 分钟</span>
          </div>
        </div>
      </div>

      <div class="split"></div>

      <div class="ratingselect">
        <div class="rating-type border-1px">
          <span class="block positive active" @click="setSelectType(2)">
            全部<span class="count">{{ratings.length}}</span>
          </span>
          <span class="block positive" @click="setSelectType(0)">
            满意<span class="count">{{positiveSize}}</span>
          </span>
          <span class="block negative" @click="setSelectType(1)">
            不满意<span class="count">{{ratings.length-positiveSize}}</span>
          </span>
        </div>
        <div class="switch" :class="{on:onlyShowText}" @click="toggleOnlyShowText">
          <span class="iconfont icon-check_circle"></span>
          <span class="text">只看有内容的评价</span>
        </div>
      </div>

      <div class="rating-wrapper">
        <ul>
          <li class="rating-item" v-for="(rating,index) in filterRatings" :key="index">
            <div class="avatar">
              <img width="28" height="28"
                   :src="rating.avatar">
            </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <Star :score="rating.score" :size="24" />
                <span class="delivery">{{rating.deliveryTime}}</span>
              </div>
              <p class="text">{{rating.text}}</p>
              <div class="recommend">
                <span class="iconfont" :class="rating.rateType === 0?'icon-thumb_up':'icon-thumb_down'"></span>
                <span class="item" v-for="(item,index) in rating.recommend" :key="index">{{item}}</span>
              </div>
              <div class="time">{{rating.rateTime | data-format}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState,mapGetters} from 'vuex'
  import BScroll from 'better-scroll'
  import Star from "../../../components/Star/Star"
  export default {
    data(){
      return{
        onlyShowText:true, //是否只显示有文本的
        selectType:2 // 选择的评价类型：0满意 1不满意
      }
    },
    mounted(){
      this.$store.dispatch('getShopRatings',() => {
        this.$nextTick(() => {
          new BScroll(this.$refs.ratings,{
            click:true
          })
        })
      })
    },
    methods:{
      setSelectType(selectType){
        this.selectType = selectType
      },
      toggleOnlyShowText(){
        this.onlyShowText = !this.onlyShowText
      }
    },
    computed:{
      ...mapState(['info','ratings']),
      ...mapGetters(['positiveSize']),
      filterRatings(){
        // 得到相关数据
        const {ratings,onlyShowText,selectType} = this
        // 产生一个过滤新数组
        return ratings.filter(ratings => {
          /*
          *
          * */

          return true
        })
      }
    },
    components:{
      Star
    },
  }
</script>

<style scoped>

</style>
