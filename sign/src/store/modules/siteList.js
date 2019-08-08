import QQMapWX from '@/utils/qqmap-wx-jssdk.min.js';

// 实例化一下
const qqMapSdk = new QQMapWX({
    key: 'UCGBZ-XN5KU-FUNVX-2JHW7-QJG3S-65F5I' // 必填
});


//模块所有的状态
const state = {
    siteList: [],
}
//模块内的同步改变
const mutations = {
    siteList(state, data) {
        state.siteList = data
    },

}
//模块内的异步改变
const actions = {
    getSiteList({ commit }, payload) {
        qqMapSdk.getSuggestion({
            keyword: payload,
            success: res => {
                commit("siteList", res.data)
            }
        })
    }
}
//
export default {
    namespaced: true,
    state,
    mutations,
    actions
}