<!--
 * @Description: In User Settings Edit
 * @Author: hn
 * @Date: 2019-08-09 20:05:48
 * @LastEditTime: 2019-08-11 21:09:42
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="wrap">
    <!-- 首页地图模块 -->
    <div class="map">
      <MyMap :markers="markers" :updateDistance="updateDistance" />
    </div>
    <!-- 打卡按钮 -->
    <cover-view class="footer">
      <button class="add" @tap="goSign">打卡</button>
    </cover-view>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return { distance: 0 };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.map {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  flex: 1;
}
.lt {
  margin-bottom: 60rpx;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 110rpx;
  line-height: 110rpx;
  background: #020816;
  color: aliceblue;
  text-align: center;
}
.add {
  background: #020816;
  color: aliceblue;
}
</style>