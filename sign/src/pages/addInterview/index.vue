<template>
  <div>
    <h4>面试信息</h4>
    <ul class="interview">
      <li>
        <span>公司名称</span>
        <input type="text" placeholder="1" />
      </li>
      <li>
        <span>公司电话</span>
        <input type="text" placeholder="1" />
      </li>
      <li>
        <span>面试时间</span>
        <input type="text" placeholder="1" />
      </li>
      <li>
        <span>面试地址</span>
        <input type="text" placeholder="1" />
      </li>
    </ul>
    <h4>备注信息</h4>
    <div>
      <textarea />
    </div>
    <button class="btn">确认</button>
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
.interview {
  background: #ffff;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
}
.interview li {
  display: flex;
  height: 100rpx;
  line-height: 100rpx;
  border-bottom: 1px solid #ccc;
  margin-left: 20rpx;
  color: #9a9a9a;
}
.interview li:last-child {
  border-bottom: none;
}
h4 {
  height: 90rpx;
  line-height: 90rpx;
  background: #e0e0e2;
  padding-left: 20rpx;
}
.btn {
  height: 120rpx;
  background: #9a9a9a;
  line-height: 120rpx;
  color: aliceblue;
}
</style>