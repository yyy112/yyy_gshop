<template>
  <!--搜索-->
  <div class="on">
    <section class="search">
      <header class="header">
        <HeaderTop title="搜索"></HeaderTop>
      </header>
      <form class="search_form" action="#">
        <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input">
        <input type="submit" name="submit" class="search_submit">
      </form>
    </section>
  </div>
</template>

<script>
  import HeaderTop from "../../components/HeaderTop/HeaderTop";
  export default {
    components:{
      HeaderTop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
