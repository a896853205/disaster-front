<!-- HomeIndex.vue
// 这个组件分权限
 -->
<template>
  <FlowContainer class="home-index">
    <FlowColumn col="3">
      <FlowItem :transparent="true">
        <div class="img-container margin-top-20">
          <div @click="goPage('/#/home/area')" class="dark"></div>
          <img src="../../assets/area.jpg" alt="">
        </div>
      </FlowItem>
    </FlowColumn>
    <FlowColumn col="3">
      <FlowItem :transparent="true">
        <div class="img-container">
          <div @click="goPage('/#/home/rescue')" class="dark"></div>
          <img src="../../assets/rescue.jpg" alt="">
        </div>
      </FlowItem>
    </FlowColumn>
    <FlowColumn col="3">
      <FlowItem :transparent="true">
        <div class="img-container margin-top-20">
          <div @click="goPage('/#/home/goods')" class="dark"></div>
          <img src="../../assets/goods.jpg" alt="">
        </div>
      </FlowItem>
    </FlowColumn>
    <FlowColumn col="3">
      <FlowItem :transparent="true">
        <div class="img-container">
          <div @click="goPage('/#/home/earthquake')" class="dark"></div>
          <img src="../../assets/earthquake.jpg" alt="">
        </div>
      </FlowItem>
    </FlowColumn>
  </FlowContainer>
</template>

<script>
// flow布局大框架
import FlowContainer from '@/components/layOut/flow/FlowContainer'
// flow布局每条列
import FlowColumn from '@/components/layOut/flow/FlowColumn'
// flow布局每条列
import FlowItem from '@/components/layOut/flow/FlowItem'
export default {
  name: 'homeindex',
  data () {
    return {
    }
  },
  components: {
    FlowContainer,
    FlowColumn,
    FlowItem
  },
  computed: {},
  methods: {
    goPage (url) {
      location.href = url
    }
  }
}
</script>
<style scoped>
img {
  height: 100%;
  box-shadow: 0 0 10px #222;
}
.img-container {
  position: relative;
  background: transparent;
  height: 530px;
  padding: 10px;
  overflow: hidden;
  text-align: center;
}
.margin-top-20 {
  margin-top: 160px;
}
.home-index {
  padding: 0 140px;
}
.dark {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  width: 100%; height: 100%;
  background: rgb(76, 76, 76);
  border-radius: 5px;
  opacity: .4;
  transition: .3s;
}
.dark:hover {
  opacity: 0;
  cursor: pointer;
}
</style>