<template>
    <div id="app">
        <div class="content">
            <router-view></router-view>
        </div>
        <FooterGuider v-show="$route.meta.showFooter"/>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import FooterGuider from "./components/FooterGuider/FooterGuider";

  export default {

    mounted(){
      // this.$store.dispatch('getAddress')
      this.getAddress()
      this.getUserInfo()
    },
    methods:{
      ...mapActions(['getAddress','getUserInfo'])
    },
    components:{
      FooterGuider
    }
  }
</script>

<style>

</style>
