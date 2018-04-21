<!-- HomeDetails.vue
其他详细细节总览
'@/components/homeChild/details/HomeDetails.vue' -->
<template>
  <div>
    HomeDetails.vue
    <HomeVehicle></HomeVehicle>
    <HomeTypeFactor></HomeTypeFactor>
    <HomeStrength></HomeStrength>
  </div>
</template>

<script>
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
    HomeStrength
  },
  computed: {},
  methods: {}
}
</script>
<style scoped>
</style>