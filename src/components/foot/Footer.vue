<!-- Footer.vue
// 底部组件
import Foot from '@/components/foot/Footer'
 -->
<template>
  <div id="buttom">
    <div class="container" :class="type">
      <img class="small-ball" src="../../assets/smallBall.jpg" alt="">
      <ul class="icon-ul">
        <li>
          <i class="iconfont icon-wechat"></i>
        </li>
        <li>
          <i class="iconfont icon-weibo"></i>
        </li>
        <li>
          <i class="iconfont icon-qq"></i>
        </li>
        <li>
          <i class="iconfont icon-github"></i>
        </li>
        <li>
          <i class="iconfont icon-twitter"></i>
        </li>
        <li>
          <i class="iconfont icon-facebook"></i>
        </li>
      </ul>
      <UlPack class="foot-base" :listClass="footBaseOpation.style" :linkList="footBaseOpation.data"></UlPack>
      <p class="copyright">© 2009-2018 版权所有 ICP证：XXXX-200XXXXX </p>
      <p class="copyright"> XX网安备 xxxxxxx000099号 </p>
    </div>
  </div>
</template>

<script>
// 列表组件
import UlPack from '@/components/form/UlPack'
export default {
  props: ['type'],
  name: 'buttom',
  data () {
    return {
      footBaseOpation: {
        data: [{
          name: '关于我们',
          href: ''
        }, {
          name: '法律声明及隐私权政策',
          href: ''
        }, {
          name: '廉正举报',
          href: ''
        }, {
          name: '友情链接',
          href: ''
        }],
        style: 'login-base-list'
      }
    }
  },
  components: {
    UlPack
  },
  computed: {},
  methods: {}
}
</script>
<style scoped>
#buttom {
  padding: 20px;
  background:rgb(0,0,0);
  box-sizing: border-box;
}
.container {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.foot-base {
  margin-top: 10px;
  margin-bottom: 35px;
}
.copyright {
  color: rgb(73, 63, 53);
}
/* 注册脚部不同处开始 */
.register-foot {
  border-top: 1px solid rgb(207, 208, 209);
}
/* 注册脚部不同处结束 */
/* 底部图标开始 */
.icon-ul {
  overflow: hidden;
}
.icon-ul > li{
  float: left;
  margin-right: 10px;
}
.iconfont {
  color: rgb(113, 97, 87);
  font-size: 25px;
  transition: .3s;
}
.iconfont:hover {
  color: #fff;
  cursor: pointer;
}
/* 底部图标结束 */
/* 下面的小球图片开始 */
.small-ball {
  position: absolute;
  right: 100px; top: 0;
  width: 200px;
  transform: rotate(90deg);
}
/* 下面的小球图片结束 */
</style>