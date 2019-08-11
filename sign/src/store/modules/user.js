import { decrypt, fingerPrint } from "@/service/user"
//模块所有的状态
const state = {
    openid: '',
    info: {}
}
//模块内的同步改变
const mutations = {
    updateState(state, payload) {
        state.openid = payload;
    },
    updateInfo(state, payload) {
        state.info = payload;
    }
}
//模块内的异步改变
const actions = {
    //解密
    async decrypt({ commit }, payload) {
        let data = await decrypt(payload);
        commit("updateInfo", data.data)
    },
    //生物认证
    async fingerPrint({ commit }, payload) {
        let data = await fingerPrint(payload);
        console.log(data, "26262626262")
        // commit("updateInfo", data.data)
    }
}
//
export default {
    namespaced: true,
    state,
    mutations,
    actions
}