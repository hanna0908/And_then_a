<template>
  <div class="wrap">
    <ul class="main" v-if="list.length">
      <li v-for="item in list" :key="item.id" @click="goDetail(item.id)">
        <div class="address">
          <span>{{item.company}}</span>
          <span
            class="no_begin"
            :class="'tag'+(item.status+2)"
          >{{item.status?item.status==1?'已放弃':'未开始':'已打卡'}}</span>
        </div>
        <div class="detailed_address">{{item.address+""}}</div>
        <div class="time">
          <span>面试时间:{{item.start_time}}</span>
          <span class="no_remind" :class="'tag'+(2-item.status)">{{item.remind?'未提醒':'已提醒'}}</span>
        </div>
      </li>
    </ul>
    <p v-else class="none">当前分类还没有面试!</p>
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    goDetail(id) {
      wx.navigateTo({ url: "/pages/interviewDetail/main?id=" + id });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.main {
  flex: 1;
  width: 100%;
  padding-top: 88rpx;
}
.main li {
  border-top: 20rpx solid #eee;
  width: 100%;
  padding: 10rpx 30rpx;
  box-sizing: border-box;
  div {
    display: flex;
    line-height: 1.5;
    margin: 15rpx 0;
    align-items: center;
    justify-content: space-between;
  }
}
.main li .address {
  span:first-child {
    color: #000;
    font-size: 44rpx;
    font-weight: 500;
  }
  span:last-child {
    font-size: 30rpx;
    padding: 5rpx 10rpx;
  }
}
.detailed_address {
  color: #909399;
  margin: 20rpx 0;
  font-size: 32rpx;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis; //文本溢出显示省略号
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.time {
  display: flex;
  justify-content: space-between;
  font-size: 34rpx;
  color: #666;
  span:last-child {
    padding: 5rpx 10rpx;
  }
}
.tag1 {
  background-color: rgba(144, 147, 153, 0.1);
  border-color: rgba(144, 147, 153, 0.2);
  color: #909399;
}
.tag2 {
  background-color: rgba(64, 158, 255, 0.1);
  color: #409eff;
  border: 1px solid rgba(64, 158, 255, 0.2);
}
.tag3 {
  background-color: rgba(245, 108, 108, 0.1);
  border-color: rgba(245, 108, 108, 0.2);
  color: #f56c6c;
}
.none {
  padding: 100rpx 0;
  text-align: center;
  font-size: 30rpx;
  color: #666;
}
</style>