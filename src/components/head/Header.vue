<!-- Header.vue
// Header组件
import Header from '@/components/head/Header'
 -->
<template>
  <div id="top" :class="listData.style">
    <i class="iconfont icon-jiankong web-logo"></i>
    <h1 class="title-h1">地震灾害预演系统</h1>
    <UlPack class="head" :listClass="listData.style" :linkList="listData.data"></UlPack>
  </div>
</template>

<script>
// 列表组件
import UlPack from '@/components/form/UlPack'
export default {
  props: ['listData'],
  name: 'top',
  data () {
    return {
    }
  },
  components: {
    UlPack
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head {
  float: right;
}
.web-logo {
  float: left;
  font-size: 35px;
  color: rgb(234, 211, 83);
  cursor: pointer;
  animation: rotation 10s infinite;
}
@keyframes rotation {
  0% {
    transform: rotate3d(1, 1, 0, 0);
  }
  50% {
    transform: rotate3d(1, 1, 0, 360deg);
  }
  100% {
    transform: rotate3d(1, 1, 0, 0);
  }
}
/* 登录头部样式开始 */
.login-head-list {
  height: 60px;
  background: rgb(0, 0, 0);
  color: rgb(113, 97, 81);
}
.login-head-list .web-black-logo {
  display: none;
}
.login-head-list .web-logo {
  line-height: 60px;
  margin-left: 30px;
}
.login-head-list .title-h1 {
  float: left;
  height: 60px;
  line-height: 60px;
  padding-left: 20px;
  font-size: 20px;
  color: rgb(113, 97, 81);
}
/* 登录头部样式结束 */
/* home页头部样式开始 */
.home-head-list {
  height: 50px;
  background: rgb(0, 0, 0);
  color: rgb(113, 97, 81);
}
.home-head-list .web-logo {
  line-height: 50px;
  margin-left: 15px;
  margin-right: 15px;
}
.home-head-list .title-h1 {
  float: left;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  color: rgb(113, 97, 81);
}
/* home页头部样式结束 */
</style>
