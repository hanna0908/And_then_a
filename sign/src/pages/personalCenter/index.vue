<!--
 * @Description: In User Settings Edit
 * @Author: hn
 * @Date: 2019-08-09 00:54:47
 * @LastEditTime: 2019-08-09 21:33:32
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="wrap">
    <div class="head">
      <dl>
        <dt>
          <p class="iconfont icon-wode"></p>
        </dt>
        <dd>{{formatPhone}}</dd>
      </dl>
    </div>
    <ul>
      <li>
        <navigator url="/pages/interviewList/main">
          <div>
            <span class="iconfont icon-solid-time"></span>
            <p>我的面试</p>
          </div>
          <i class="iconfont icon-qianjin"></i>
        </navigator>
      </li>
      <li>
        <navigator>
          <div>
            <span class="iconfont icon-solid-time"></span>
            <p>客服中心</p>
          </div>
          <i class="iconfont icon-qianjin"></i>
        </navigator>
      </li>
    </ul>
    <div class="dialog" v-if="flag">
      <div class="mask">
        <p>为了更好地使用我们的服务,我们需要获取你的手机号码</p>
        <button v-if="!hasPhone" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">同意</button>
        <button v-if="showSetting" open-type="openSetting">打开设置页面</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      hasPhone: false,
      showSetting: false,
      phoneNumber: "",
      flag: true
    };
  },
  computed: {
    ...mapState({
      info: state => state.user.info
    }),
    //手机号替换
    formatPhone() {
      let phone = this.info.phoneNumber;
      if (phone) {
        this.flag = false;
        return phone.slice(0, 3) + "****" + phone.slice(7, 11);
      } else {
        return "************";
      }
    }
  },
  methods: {
    ...mapActions({
      decrypt: "user/decrypt"
    }),
    ...mapMutations({
      updateState: "user/updateState"
    }),
    //获取手机号 解密数据后
    getPhoneNumber(e) {
      let { encryptedData, iv } = e.target;
      if (encryptedData) {
        let data = this.decrypt({
          encryptedData,
          iv
        });
      } else {
        this.showSetting = true;
        wx.openSetting({ success: res => {} });
      }
    }
    // hideMask(e) {
    //   if (e.target.dataset.id == 1) {
    //     this.showPhoneDialog = false;
    //   }
    // }
  },

  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  .head {
    width: 100%;
    background: #f8f8f8;
    text-align: center;
    padding: 50rpx 0;
    dl {
      dt {
        width: 100%;
        p {
          width: 150rpx;
          height: 150rpx;
          border-radius: 50%;
          background: #fff;
          font-size: 90rpx;
          display: inline-block;
          color: #1a7dc0;
          line-height: 150rpx;
        }
      }
      dd {
        margin-top: 40rpx;
      }
    }
  }
  ul {
    li {
      navigator {
        width: 100%;
        height: 120rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 30rpx;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        div {
          display: flex;
          align-items: center;
          span {
            color: #0faeff;
            font-size: 40rpx;
          }
          p {
            margin-left: 20rpx;
            color: #666;
          }
        }
      }
    }
    li:nth-child(2) {
      height: 150rpx;
    }
  }
  .dialog {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    .mask {
      width: 250px;
      height: 100px;
      border-radius: 8px;
      background: #fff;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      p {
        padding: 12px 5px;
        box-sizing: border-box;
        font-size: 16px;
      }
      button {
        margin-top: 0;
        background: #0555e9;
        color: #fff;
        border-top-left-radius: 0%;
        border-top-right-radius: 0%;
      }
    }
  }
}
</style>