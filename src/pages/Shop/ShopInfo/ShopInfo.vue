<template>
  <div class="shop-info">
    <div class="info-content">
      <section class="section">
        <h3 class="section-title">配送信息</h3>
        <div class="delivery">
          <div>
            <span class="delivery-icon">{{info.description}}</span>
            <span>由商家配送提供配送，约 {{info.deliveryTime}} 分钟送达，距离 {{info.distance}}</span>
          </div>
          <div class="delivery-money">配送费￥{{info.deliveryPrice}}</div>
        </div>
      </section>
      <div class="split"></div>
      <section class="section">
        <h3 class="section-title">活动与服务</h3>
        <div class="activity">
          <div class="activity-item" :class="supportClasses[support.type]"
               v-for="(support,index) in info.supports" :key="index">
            <span class="content-tag">
              <span class="mini-tag">{{support.name}}</span>
            </span>
            <span class="activity-content">{{support.content}}</span>
          </div>
        </div>
      </section>
      <div class="split"></div>
      <section class="section">
        <h3 class="section-title">商家实景</h3>
        <div class="pic-wrapper">
          <ul class="pic-list" ref="picsUl">
            <li class="pic-item" v-for="(pic,index) in info.pics" :key="index">
              <img width="120" height="90"
                   :src="pic"/>
            </li>
          </ul>
        </div>
      </section>
      <div class="split"></div>
      <section class="section">
        <h3 class="section-title">商家信息</h3>
        <ul class="detail">
          <li><span class="bold">品类</span> <span>{{info.category}}</span></li>
          <li><span class="bold">商家电话</span> <span>{{info.phone}}</span></li>
          <li><span class="bold">地址</span> <span>{{info.address}}</span></li>
          <li><span class="bold">营业时间</span> <span>{{info.workTime}}</span></li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  export default {
    data(){
      return {
        supportClasses:['activity-green','activity-red','activity-orange',]
      }
    },
    computed:{
      ...mapState(['info'])
    },

    mounted() {
      // 如果数据还没有，直接结束
      if(!this.info.pics){
        return
      }
      // 数据有了，可以创建BScroll对象形成滑动
      this._initScroll()
    },
    methods:{
      _initScroll(){
        new BScroll('.shop-info')

        // 动态计算ul的宽度
        const ul = this.$refs.picsUl
        const liWidth = 120
        const space = 6
        const count = this.info.pics.length
        ul.style.width = (liWidth+space)*count - space + 'px'

        new BScroll('.pic-wrapper',{
          scrollX:true // 水平滑动
        })
      }
    },
    watch:{
      info(){ // 刷新流程==> 更新数据
        this.$nextTick(() => {
          this._initScroll()
        })
      }
    }
  }
</script>

<style scoped>

</style>
