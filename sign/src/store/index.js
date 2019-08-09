import Vue from "vue";
import Vuex from "vuex";
import CreateLogger from 'vuex/dist/logger';
//引入store子模块
import home from "./modules/home";
import siteList from "./modules/siteList";
import addressList from "./modules/addressList";
import interviewList from "./modules/interviewList";
import user from './modules/user'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        home,
        siteList,
        addressList,
        interviewList,
        user
    },
    plugin: [CreateLogger()]
})