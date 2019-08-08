import { getSignList, getSignDetail, updateSignDetail } from '@/service/api';
const moment = require('moment');

const state = {
    active: 1, //表示当前面试类型，0表示全部，1表示未开始，1表示已打卡，2表示已放弃
    list: [], //面试列表
    info: {}, //面试详情数据
    hasMore: true,  //是否有更多数据
    page: 1, //当前页码
    pageSize: 10 //每页数据
}
//模块内的同步改变
const mutations = {
    updateState(state, payload) {
        state.active = payload.active
        state.list = payload.list
    }
}
//模块内的异步改变
const actions = {
    async getList({ commit }, payload) {
        let params = {};
        // 修正面试状态
        if (state.active) {
            params.status = state.active - 2;
        }
        let result = await getSignList(params);
        console.log(result, "28")
        commit('updateState', { list: result.data })
    }
}


function formatTime(start_time) {
    return moment(start_time * 1).format('YYYY-MM-DD HH:mm');
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}