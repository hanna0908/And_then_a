import { getSignList, getSignDetail, updateSignDetail } from '@/service/api';
const moment = require('moment');
const state = {
  active: 1, //表示当前面试类型，0表示全部，1表示未开始，1表示已打卡，2表示已放弃
  list: [], //面试列表
  info: {}, //面试详情数据
  hasMore: true,  //是否有更多数据
  page: 1, //当前页码
  pageSize: 10,//每页数据
  obj: {},
  id: 0,
}
//模块内的同步改变
const mutations = {
  updateState(state, payload) {
    state.active = payload.active
    state.list = payload.list
  },
  updateDetail(state, payload) {
    state.obj = { ...state.obj, ...payload };
    state.id = payload.id
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
    params.page = state.page;
    params.pageSize = state.pageSize;
    let result = await getSignList(params);
    result.data.map((item, index) => {
      item.address = JSON.parse(item.address)
      item.start_time = formatTime(item.start_time * 1)

    })
    // 判断是替换还是追加
    if (state.page === 1) {
      commit('updateState', { list: result.data })
    } else {
      commit('updateState', { list: [...state.list, ...result.data] })
    }
  },
  //跳转面试详情
  async goDetail({ commit }, payload) {
    let result = await getSignDetail(payload);
    if (result.code === 0) {
      commit('updateDetail', result.data)
    }
  },
  //更新面试状态
  async updateDetail({ commit }, payload) {
    console.log(payload, "hdghsgdjhgdshsgd");
    let data = await updateSignDetail(payload.id, payload.params)
    if (data.code == 0) {
      dispatch("goDetail", payload, id)
    }

  }
}
//日期转换
function formatTime(start_time) {
  return moment(start_time * 1).format('YYYY-MM-DD HH:mm');
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}