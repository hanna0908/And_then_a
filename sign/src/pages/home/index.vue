<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 00:54:47
 * @LastEditTime: 2019-08-11 21:07:38
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="wrap">
    <div class="map">
      <MyMap class="map" :reLocation="reLocation" />
      <cover-view class="user_info" @click="userChange">
        <cover-view class="iconfont icon-ziyuan" />
      </cover-view>
    </div>
    <footer class="footer" @click="addexamChange">添加面试</footer>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      markers: [],
      // 用户当前位置
      reLocation: false
    };
  },
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      longitude: state => state.home.longitude,
      latitude: state => state.home.latitude,
      openid: state => state.user.openid
    })
  },
  methods: {
    // 点击标注物
    marketTap(e) {},
    addexamChange() {
      console.log(this.opendid);
      wx.navigateTo({
        url: "/pages/addInterview/main"
      });
    },
    ...mapActions({
      location: "home/getLocation",
      fingerPrints: "user/fingerPrint"
    }),
    userChange() {
      wx.navigateTo({
        url: "/pages/personalCenter/main"
      });
    }
  },
  created() {
    wx.startSoterAuthentication({
      requestAuthModes: ["fingerPrint"],
      challenge: "123456",
      authContent: "请用指纹解锁",
      success: res => {
        console.log(res, "fgfjhgghgjhhghghghghgg");
        this.fingerPrints({
          openid: this.openid,
          json_string: res.resultJSON,
          json_signature: res.resultJSONSignature
        });
      }
    });
  },
  mounted() {}
};
</script>
<style scoped lang="">
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.map {
  width: 100%;
  height: 100%;
  /* padding-bottom: 100rpx; */
  box-sizing: border-box;
  display: flex;
  position: relative;
}
.tit {
  height: 90rpx;
  line-height: 90rpx;
}
.user_info {
  position: absolute;
  bottom: 60rpx;
  right: 30rpx;
  width: 96rpx;
  height: 96rpx;
  border-radius: 50%;
  background: #020816;
}
.user_info .icon-ziyuan {
  font-size: 50rpx;
  color: #197dbf;
  text-align: center;
  line-height: 96rpx;
}
.footer {
  height: 110rpx;
  line-height: 110rpx;
  background: #020816;
  color: rgb(161, 190, 216);
  text-align: center;
}
</style>