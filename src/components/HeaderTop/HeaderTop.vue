<template>
  <!--首页头部-->
    <header class="msite_header">
      <slot name="left"></slot>
      <span class="header_title">
          <span class="header_title_text ellipsis">{{title}}</span>
      </span>
      <slot name="right"></slot>
    </header>
</template>

<script>
  // import {mapState} from 'vuex'
    export default {
      props:{
        title:String
      }
    }
</script>

<style scoped>

</style>
