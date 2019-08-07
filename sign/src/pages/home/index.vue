<template>
  <div class="wrap">
    <map id="map" show-location :longitude="longitude" :latitude="latitude" :markers="markers">
      <cover-view class="location" @click="location">
        <button>定位</button>
      </cover-view>
    </map>

    <footer class="footer" @click="addexamChange">添加面试</footer>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      markers: []
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
      latitude: state => state.home.latitude
    })
  },
  methods: {
    addexamChange() {
      wx.navigateTo({
        url: "/pages/addInterview/main"
      });
    },
    ...mapActions({
      location: "home/getLocation"
    })
  },
  created() {},
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
.tit {
  height: 90rpx;
  line-height: 90rpx;
}
#map {
  flex: 1;
  width: 100%;
}
.location {
  position: fixed;
  bottom: 100rpx;
  left: 30rpx;
}
.footer {
  height: 96rpx;
  line-height: 96rpx;
  background: #020816;
  color: aliceblue;
  text-align: center;
}
</style>