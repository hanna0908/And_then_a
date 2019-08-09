<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 20:27:07
 * @LastEditTime: 2019-08-10 00:16:52
 * @LastEditors: Please set LastEditors
 -->
<template class="wrap">
  <div class="wrap">
    <map
      id="map"
      :longitude="location.longitude"
      :latitude="location.latitude"
      subkey="X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL"
      show-location
      show-compass
      :circles="circle"
      :include-points="points"
      :markers="markers"
      @markertap="markertap"
      @regionchange="regionChange"
    ></map>
    <cover-view class="location">
      <cover-view class="iconfont icon-weizhi" @click="goCurrent" />
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
      location: {
        latitude: 23.099994,
        longitude: 113.32452
      },
      distance: 0
    };
  },
  computed: {
    ...mapState({
      longitude: state => state.home.longitude,
      latitude: state => state.home.latitude
    }),
    points() {
      return [this.location, ...this.markers];
    },
    circle() {
      if (!this.markers.length) {
        return [];
      } else {
        return [
          {
            ...this.markers[0],
            color: this.distance > 100 ? "#C9394A" : "#197DBF",
            fillColor: "rgba(0,0,0, .3)",
            radius: 100,
            strokeWidth: 2
          }
        ];
      }
    }
  },
  watch: {
    reLocation() {
      // 检测重新定位当前位置
      this.goCurrent();
    }
  },
  methods: {
    ...mapActions({
      location: "home/getLocation"
    })
  },
  props: {
    markers: {
      type: Array,
      default: []
    },
    markertap: {
      type: Function,
      default: () => {}
    },
    reginonChange: {
      type: Function,
      default: () => {}
    },
    reLocation: {
      type: Boolean,
      default: false
    },
    updateDistance: {
      typef: Function,
      default: () => {}
    }
  },
  mounted() {
    this.goCurrent();
  },
  methods: {
    goCurrent() {
      getAuth("scope.userLocation", async () => {
        let location = await getLocation();
        this.location = location;

        console.log("scope.userLocation...", this.location, this.markers[0]);
        // 重新计算距离
        if (this.updateDistance) {
          this.distance = getDistance(
            this.location.latitude,
            this.location.longitude,
            this.markers[0].latitude,
            this.markers[0].longitude
          );
          this.updateDistance(this.distance);
        }
      });
    }
  },
  created() {}
};
</script>
<style scoped lang="">
div {
  position: relative;
  height: 100%;
}
map {
  width: 100%;
  height: 100%;
  margin-bottom: 88rpx;
}

.location {
  position: absolute;
  z-index: 1001;
  position: absolute;
  bottom: 60rpx;
  left: 30rpx;
}
.location .icon-weizhi {
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