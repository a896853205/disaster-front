<!-- HomeGoods.vue
物资情况组件
'@/components/homeChild/goods/HomeGoods.vue' -->
<template>
  <div>
    HomeGoods.vue
    <HomeGoodsAdd></HomeGoodsAdd>
  </div>
</template>

<script>
// 增加物资情况组件
import HomeGoodsAdd from '@/components/homeChild/goods/HomeGoodsAdd.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    HomeGoodsAdd
  },
  computed: {},
  methods: {}
}
</script>
<style scoped>
</style>