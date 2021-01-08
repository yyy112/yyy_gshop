<template>
  <!--我的-->
  <div class="on">
    <section class="profile">
      <header class="header">
        <HeaderTop title="我的"></HeaderTop>
      </header>
      <section class="profile-number" >
        <router-link :to="userInfo._id?'/userinfo':'/login'" class="profile-link">
          <div class="profile_image">
            <i class="iconfont icon-person"></i>
          </div>
          <div class="user-info">
            <p class="user-info-top" v-if="!userInfo.phone">{{userInfo.name || '登录/注册'}}</p>
            <p>
                <span class="user-icon">
                  <i class="iconfont icon-shouji icon-mobile"></i>
                </span>
              <span class="icon-mobile-number">{{userInfo.phone || '暂无绑定手机号'}}</span>
            </p>
          </div>
          <span class="arrow">
              <i class="iconfont icon-jiantou1"></i>
            </span>
        </router-link>
      </section>
      <section class="profile_info_data border-1px">
        <ul class="info_data_list">
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top"><span>0.00</span>元</span>
            <span class="info_data_bottom">我的余额</span>
          </a>
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top"><span>0</span>个</span>
            <span class="info_data_bottom">我的优惠</span>
          </a>
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top"><span>0</span>分</span>
            <span class="info_data_bottom">我的积分</span>
          </a>
        </ul>
      </section>
      <section class="profile_my_order border-1px">
        <!-- 我的订单 -->
        <a href='javascript:' class="my_order">
            <span>
              <i class="iconfont icon-order-s"></i>
            </span>
          <div class="my_order_div">
            <span>我的订单</span>
            <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
          </div>
        </a>
        <!-- 积分商城 -->
        <a href='javascript:' class="my_order">
            <span>
              <i class="iconfont icon-jifen"></i>
            </span>
          <div class="my_order_div">
            <span>积分商城</span>
            <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
          </div>
        </a>
        <!-- 硅谷外卖会员卡 -->
        <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-vip"></i>
            </span>
          <div class="my_order_div">
            <span>硅谷外卖会员卡</span>
            <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
          </div>
        </a>
      </section>
      <section class="profile_my_order border-1px">
        <!-- 服务中心 -->
        <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-fuwu"></i>
            </span>
          <div class="my_order_div">
            <span>服务中心</span>
            <span class="my_order_icon">
                <i class="iconfont icon-jiantou1"></i>
              </span>
          </div>
        </a>
      </section>
    </section>
    <section class="profile_info_data border-1px">
      <button style="width: 100%;background: red;color:#fff;height: 45px;font-size: 20px;border:none;margin-top:10px;"
              v-if="userInfo._id" @click="logout"
      >
        退出登录
      </button>
<!--      <mt-button type="danger" style="width:100%;height: 45px;margin-top:10px;background: red">退出登录</mt-button>-->
    </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import { MessageBox } from 'mint-ui'

  import HeaderTop from "../../components/HeaderTop/HeaderTop";
  // import actions from "../../store/actions";
  export default {
    // #ff5f3e
    computed:{
      ...mapState(['userInfo'])
    },
    methods:{
      logout(){
        this.$store.dispatch('logout')
        // window.confirm('确认退出码')
        /*MessageBox.confirm('确定退出吗?').then(
          action => {
            // 请求退出
            this.$store.dispatch('logout')
          },
          action => {
            console.log('点击了取消')
          }
        )*/
      }
    },
    components:{
      HeaderTop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
