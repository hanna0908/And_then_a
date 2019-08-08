<template>
  <div>
    <p class="cityBox">
      <span class="city">北京</span>
      <input type="text" placeholder="面试地址" @input="search" v-model="val" />
    </p>
    <ul class="location_list">
      <li v-for="(item,index) in siteList" :key="item.id" @click="addressChange(index)">
        <i class="iconfont icon-zhifeiji"></i>
        <div class="location_rt">
          <h4>{{item.title}}</h4>
          <p>{{item.address}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      val: ""
    };
  },
  computed: {
    ...mapState({
      siteList: state => state.siteList.siteList
    })
  },
  methods: {
    //所有数据
    ...mapActions({
      getSiteList: "siteList/getSiteList"
    }),
    //点击地址存入store中
    ...mapMutations({
      updateState: "addressList/updateState"
    }),
    search() {
      this.getSiteList(this.val);
    },
    //点击事件
    addressChange(index) {
      // console.log(this.siteList[index], "47");
      this.updateState({
        address: this.siteList[index]
      });
      wx.navigateBack({
        delta: 1
      });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.cityBox {
  height: 110rpx;
  border-top: 1px solid #dddd;
  border-bottom: 1px solid #dddd;
  display: flex;
  .city {
    margin: 24rpx 40rpx;
    padding-right: 30rpx;
    border-right: 1px solid #dddd;
  }
  input {
    padding-top: 30rpx;
    flex: 1;
  }
}
.location_list {
  flex: 1;
  li {
    display: flex;
    border-bottom: 1px solid #bbbbbb;
  }
  .location_rt {
    flex: 1;
  }
  p {
    font-size: 34rpx;
    color: #bbbbbb;
  }
  .icon-zhifeiji {
    margin: 24rpx 50rpx 4rpx;
    color: #197dbf;
    font-size: 50rpx;
    font-weight: 600;
  }
}
</style>