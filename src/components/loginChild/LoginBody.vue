<!-- LoginBody.vue -->
<template>
  <div id="loginBody">
    <!-- <div class="login-inform-box">
      <h1 class="box-title">地震灾害物资预演系统</h1>
      <ul class="box-list">
        <li>空间无限量,高性能,导出所需文件</li>
        <li>给予用户邮箱反馈,更加亲和</li>
        <li>可视化分析界面,所需数据触手可得</li>
      </ul>
    </div> -->
    <img class="login-image" src="../../assets/bigBall.png" alt="">
    <LoginForm class="login-form"></LoginForm>
  </div>
</template>

<script>
// 登录表单
import LoginForm from '@/components/loginChild/LoginForm'

export default {
  data () {
    return {
    }
  },
  components: {
    LoginForm
  },
  computed: {},
  methods: {}
}
</script>
<style scoped>
#loginBody {
  position: relative;
  width: 1090px;
  margin:0 auto;
  overflow: hidden;
}
.login-image {
  position: absolute;
  top: 0;
  width: 588px;
  animation: rotation 600s linear infinite;
}
@keyframes rotation {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.login-form {
  float: right;
}
</style>