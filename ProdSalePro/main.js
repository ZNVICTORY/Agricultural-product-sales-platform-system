import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import fetch from './utils/request.js'

Vue.prototype.$store = store
Vue.prototype.$fetch = fetch
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
