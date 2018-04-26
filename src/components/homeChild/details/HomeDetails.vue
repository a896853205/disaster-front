<!-- HomeDetails.vue
其他详细细节总览
'@/components/homeChild/details/HomeDetails.vue' -->
<template>
  <div>
    <FlowContainer>
      <FlowColumn col="12">
        <FlowItem>
          大图片
        </FlowItem>
      </FlowColumn>
    </FlowContainer>
    <FlowContainer>
      <FlowColumn col="4">
        <FlowItem>
          <FlowItemHead>交通工具类型总览</FlowItemHead>
          <HomeVehicle></HomeVehicle>
        </FlowItem>
      </FlowColumn>
      <FlowColumn col="4">
        <FlowItem>
          <FlowItemHead>物资类型总览</FlowItemHead>
          <HomeTypeFactor></HomeTypeFactor>
        </FlowItem>
      </FlowColumn>
      <FlowColumn col="4">
        <FlowItem>
          <FlowItemHead>烈度类型总览</FlowItemHead>
          <HomeStrength></HomeStrength>
        </FlowItem>
      </FlowColumn>
    </FlowContainer>
  </div>
  
</template>

<script>
// flow布局大框架
import FlowContainer from '@/components/layOut/flow/FlowContainer'
// flow布局每条列
import FlowColumn from '@/components/layOut/flow/FlowColumn'
// flow布局每条列
import FlowItem from '@/components/layOut/flow/FlowItem'
// flow布局布局头部
import FlowItemHead from '@/components/layOut/flow/FlowItemHead'
// 车辆细节查看组件
import HomeVehicle from '@/components/homeChild/details/HomeVehicle.vue'
// 系数细节查看组件
import HomeTypeFactor from '@/components/homeChild/details/HomeTypeFactor.vue'
// 烈度查看组件
import HomeStrength from '@/components/homeChild/details/HomeStrength.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    HomeVehicle,
    HomeTypeFactor,
    HomeStrength,
    FlowContainer,
    FlowColumn,
    FlowItem,
    FlowItemHead
  },
  computed: {},
  methods: {}
}
</script>
<style scoped>
</style>