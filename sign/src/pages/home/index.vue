<template>
  <div class="wrap">
    <map class="map"></map>
    <footer class="footer" @click="addexamChange">添加面试</footer>
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
  methods: {
    addexamChange() {
      wx.navigateTo({
        url: "/pages/addInterview/main"
      });
    }
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
.map {
  flex: 1;
  width: 100%;
}
.footer {
  height: 96rpx;
  line-height: 96rpx;
  background: #020816;
  color: aliceblue;
  text-align: center;
}
</style>