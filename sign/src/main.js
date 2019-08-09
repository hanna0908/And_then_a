import Vue from 'vue'
import App from './App'
import "./iconfont/iconfont.css"
import MyMap from "./components/map"
//引入store
import store from "./store"
Vue.config.productionTip = false
App.mpType = 'app'

//挂载store
Vue.prototype.$store = store
Vue.component('MyMap', MyMap);

const app = new Vue(App)
app.$mount()
