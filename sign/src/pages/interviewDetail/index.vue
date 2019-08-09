<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 00:54:47
 * @LastEditTime: 2019-08-09 21:06:53
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <ul class="interview">
      <li>
        <span>面试地址:</span>
        <p>{{every.address}}</p>
      </li>
      <li>
        <span>面试时间:</span>
        <p>{{time}}</p>
      </li>
      <li>
        <span>联系方式:</span>
        <p>{{obj.phone}}</p>
      </li>
      <li>
        <span>是否提醒:</span>
        <p>{{obj.remind?'未提醒':'已提醒'}}</p>
      </li>
      <li>
        <span>面试状态:</span>
        <p>{{obj.status==-1?'未开始':obj.status==0?'已打卡': '已放弃'}}</p>
      </li>
      <li v-if="obj.status==-1">
        <!-- -1表示未开始，0表示已打卡，1表示已放弃 -->
        <span>取消提醒:</span>
        <switch :checked="obj.remind===1" @change="cancelRemind" />
        <!-- -1表示未提醒，0表示已提醒，1表示取消提醒 -->
      </li>
    </ul>
    <div v-if="obj.status==-1" class="btnBox">
      <!-- -1表示未开始，0表示已打卡，1表示已放弃 -->
      <button @click="goSign">去打卡</button>
      <button @click="giveup">放弃面试</button>
    </div>
  </div>
</template>
<script>
const moment = require("moment");
import { mapState, mapMutations, mapActions } from "vuex";
function formatTime(start_time) {
  return moment(start_time * 1).format("YYYY-MM-DD HH:mm");
}
export default {
  props: {},
  components: {},
  data() {
    return { view: false };
  },
  computed: {
    ...mapState({
      obj: state => state.interviewList.obj,
      id: state => state.interviewList.id
    }),
    time() {
      return formatTime(this.obj.start_time);
    },
    every() {
      return this.obj.address ? JSON.parse(this.obj.address) : "";
    }
  },
  methods: {
    ...mapActions({
      updateDetail: "interviewList/updateDetail"
    }),
    //取消提醒
    cancelRemind(e) {
      this.updateDetail({
        id: this.id,
        params: { remind: e.target.value ? 1 : -1 }
      });
    },
    //去打卡
    goSign() {
      wx.navigateTo({ url: "/pages/sign/main" });
    },
    //放弃面试
    giveup() {
      wx.showModal({
        title: "温馨提示", //提示的标题,
        content: "确定要放弃本次面试吗?", //提示的内容,
        success: async res => {
          if (res.confirm) {
            await this.updateDetail({
              id: this.id,
              params: { status: 1 }
            });
          }
        }
      });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.interview li {
  display: flex;
  height: 130rpx;
  line-height: 130rpx;
  border-bottom: 1px solid #ccc;
  margin-left: 40rpx;
  color: #666;
  span {
    color: #666;
    width: 170rpx;
    font-size: 30rpx;
  }
  p {
    // height: 88rpx;
    // line-height: 88rpx;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  p,
  switch {
    flex: 1;
    font-size: 30rpx;
    color: #333;
    padding-right: 30rpx;
    box-sizing: border-box;
  }
}
.btnBox {
  display: flex;
  margin: 50rpx 15rpx;
  button {
    flex: 1;
    color: #fff;
    margin: 15rpx;
  }
  button:first-child {
    background: #197dbf;
  }
  button:last-child {
    background: #dc4e42;
  }
}
</style>