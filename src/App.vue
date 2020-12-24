<template>
    <div id="app">
        <div class="content">
            <router-view></router-view>
        </div>
        <FooterGuider v-show="$route.meta.showFooter"/>
    </div>
</template>

<script>
  import FooterGuider from "./components/FooterGuider/FooterGuider";
  export default {
    components:{
      FooterGuider
    }
  }
</script>

<style>

</style>
