<template>
  <div class="listBox">
    <ul class="status">
      <li
        @click="tabChange(index)"
        v-for="(item, index) in types"
        :key="index"
        :class="(active+3)%4===index?'active':''"
      >{{item}}</li>
    </ul>
    <SingList :list="list"></SingList>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
import moment from "moment";
import SingList from "@/components/singList";
export default {
  props: {},
  components: { SingList },
  data() {
    return {
      types: ["未打开", "已打卡", "已放弃", "全部"]
    };
  },
  computed: {
    ...mapState({
      // page: state => state.interviewList.page,
      // hasMore: state => state.interviewList.hasMore,
      list: state => state.interviewList.list,
      active: state => state.interviewList.active
    })
  },
  methods: {
    ...mapMutations({
      updateState: "interviewList/updateState"
    }),
    ...mapActions({
      getList: "interviewList/getList"
    }),
    tabChange(index) {
      this.updateState({ active: (index + 1) % 4, page: 1 });
      this.getList();
    }
  },
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
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 99;
  width: 100%;
  height: 88rpx;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #eee;
}
.status li {
  width: 25%;
  line-height: 88rpx;
  text-align: center;
  box-sizing: border-box;
  border-bottom: 2rpx solid #fff;
}
.status li.active {
  color: #197dbf;
  line-height: 88rpx;
  font-weight: 500;
  border-bottom: 3rpx solid #197dbf;
}
</style>
