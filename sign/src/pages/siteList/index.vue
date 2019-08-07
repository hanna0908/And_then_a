<template>
  <div>
    <p class="cityBox">
      <span class="city">北京</span>
      <input type="text" placeholder="北京八维" @input="search" v-model="val"/>
    </p>
    <ul class="location_list">
      <li v-for="(item,index) in siteList" :key="item.id">
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
import { mapActions, mapState } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      val:""
    };
  },
  computed: {
    ...mapState({
       siteList:state=> state.siteList.siteList
    })
  },
  methods: {
    ...mapActions({
      getSiteList: "siteList/getSiteList"
    }),
    search(){
 this.getSiteList(this.val);
    }
  },
  created() {},
  mounted() {
   
    console.log(this.siteList)
  }
};
</script>
<style scoped lang="">
.cityBox {
  height: 110rpx;
  border-top: 1px solid #dddd;
  border-bottom: 1px solid #dddd;
  display: flex;
}
.cityBox .city {
  margin: 24rpx 40rpx;
  padding-right: 30rpx;
  border-right: 1px solid #dddd;
}
.cityBox input {
  padding-top: 30rpx;
  flex: 1;
}
.location_list {
  flex: 1;
}
.location_list li {
  display: flex;
  border-bottom: 1px solid #bbbbbb;
}
.location_list .location_rt {
  flex: 1;
}
.location_list p {
  font-size: 34rpx;
  color: #bbbbbb;
}
.location_list .icon-zhifeiji {
  margin: 24rpx 50rpx 4rpx;
  color: #197dbf;
  font-size: 50rpx;
  font-weight: 600;
}
</style>