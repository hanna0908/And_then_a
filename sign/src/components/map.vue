<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 20:27:07
 * @LastEditTime: 2019-08-11 21:40:27
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="wrap">
    <map id="map" :longitude="longitude" :latitude="latitude" show-location :markers="markers"></map>
    <cover-view class="location">
      <img src="/static/images/location.png" alt @click="goCurrents" />
      <!-- <cover-view class="iconfont icon-weizhi" @click="goCurrents" /> -->
    </cover-view>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { getLocation, getAuth } from "@/utils/index.js";
import getDistance from "@/utils/distance.js";
export default {
  props: {},
  components: {},
  data() {
    return {
      location: {},
      distance: 0
    };
  },
  computed: {
    ...mapState({
      longitude: state => state.home.longitude,
      latitude: state => state.home.latitude
    })
  },
  methods: {
    ...mapActions({
      goCurrents: "home/getLocation"
    })
  },
  mounted() {},
  created() {}
};
</script>
<style scoped lang="">
map {
  width: 100%;
  height: 100%;
  margin-bottom: 88rpx;
}

.location {
  position: fixed;
  z-index: 1001;
  bottom: 170rpx;
  left: 30rpx;
}
.location img {
  color: #197dbf;
  font-size: 70rpx;
  font-weight: 600;
  height: 80rpx;
  width: 80rpx;
}
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>