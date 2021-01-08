<template>
  <div class="star" :class="'star-' + size">
    <span class="star-item" v-for="(sc,index) in starClasses" :class="sc" :key="index"></span>
  </div>
</template>

<script>
  // 类名常量
  const CLASS_ON = 'on'
  const CLASS_OFF = 'off'
  const CLASS_HALF = 'half'
    export default {
        props:{
          score:Number,
          size:Number
        },
      computed:{

          starClasses(){
            const {score} = this
            const scs = []
            // 向scs中添加n个'CLASS_ON'
            const scoreInteger = Math.floor(score)
            for(let i=0;i<scoreInteger;i++){
              scs.push(CLASS_ON)
            }
            // 向scs中添加0/1个'CLASS_HALF'
            if(score*10-scoreInteger*10>=5){
              scs.push(CLASS_HALF)
            }
            // 向scs中添加n个'CLASS_OFF'
            while (scs.length<5){
              scs.push(CLASS_OFF)
            }

            return scs
          }
      }
    }
</script>

<style>

</style>
