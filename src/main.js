import Vue from 'vue'
import App from './App.vue'
import Layout from './component/Layout'
import router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
