import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Filters from './filter' //引入过滤器
Filters(Vue) //使用过滤器
//注册两个插件
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
