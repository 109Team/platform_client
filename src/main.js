// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'moment'
import Cookies from 'js-cookie'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import i18nZh from '@/i18n/zh/app'
import i18nEn from '@/i18n/en/app'
import store from './store'

Vue.config.productionTip = false
Vue.use(iView)
Vue.prototype.$moment = moment
Vue.prototype.$i18n = i18nZh

// 这是当前环境的语言
const Language = Cookies.get('Language')
if (Language) {
  Language === '2' && (Vue.prototype.$i18n = i18nEn)
} else {
  Cookies.set('Language', '1')
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
