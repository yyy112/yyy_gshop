import Vue from 'vue'
// import moment from 'moment'
import format from 'data-fns/format'

// 自定义过滤器
Vue.filter('data-format',function (value,formatStr='YYYY-MM-DD HH:mm:ss') {
  // return moment(value).format(formatStr)
  return format(value,formatStr)
})
