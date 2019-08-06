<template>
  <div class="listBox">
    <ul class="status">
      <li>未打卡</li>
      <li>已打卡</li>
      <li>已放弃</li>
      <li>全部</li>
    </ul>
    <ul class="main">
      <li>
        <div class="address">
          <h3>北京八维研修学院</h3>
          <span class="no_begin">未开始</span>
        </div>
        <p class="detailed_address">北京市海淀区上地</p>
        <div class="time">
          <h3>面试时间:2019-08-06</h3>
          <span class="no_remind">未提醒</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
.listBox {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.status {
  border-top: 1px solid #dddd;
  border-bottom: 20rpx solid #dddd;
  width: 100%;
  display: flex;
}
.status li {
  width: 25%;
  height: 96rpx;
  line-height: 96rpx;
  text-align: center;
}
.main {
  flex: 1;
  width: 100%;
}
.main li {
  display: flex;
  flex-direction: column;
  padding: 24rpx 40rpx;
}
.main li .address {
  display: flex;
  justify-content: space-between;
}
.no_begin {
  background: #f4f4f4;
  color: #909399;
  padding: 6rpx 10rpx;
}
.no_remind {
  background: #fef0f0;
  color: #f56c6c;
  padding: 6rpx 10rpx;
}
.detailed_address {
  color: #909399;
  margin: 20rpx 0;
}
.time {
  color: #6666;
  display: flex;
  justify-content: space-between;
}
</style>
