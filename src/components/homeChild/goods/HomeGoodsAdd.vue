<!-- HomeGoodsAdd.vue
增加物资情况组件
'@/components/homeChild/goods/HomeGoodsAdd.vue' -->
<template>
  <div>
    HomeGoodsAdd.vue
    <input v-model="goods.name" type="text" placeholder="物资名">
    <input v-model="goods.type_id" type="text" placeholder="物资类型">
    <input v-model="goods.size" type="text" placeholder="规格">
    <input v-model="goods.unit" type="text" placeholder="单位">
    <input v-model="goods.weight" type="text" placeholder="重量">
    <button type="button" @click="save">保存</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      goods: {
        name: '',
        type_id: '',
        size: '',
        unit: '',
        weight: ''
      }
    }
  },
  components: {},
  computed: {},
  methods: {
    save () {
      this.$http.post('/home/addGoods', this.goods)
      .then(res => {
        this.$notify({
          title: '增加物资',
          message: '成功',
          duration: 1000
        })
        this.$emit('add-success')
      })
    }
  }
}
</script>
<style scoped>
</style>