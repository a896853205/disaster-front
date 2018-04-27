<!-- HomeGoodsAdd.vue
增加物资情况组件
'@/components/homeChild/goods/HomeGoodsAdd.vue' -->
<template>
  <div class="add-container">
    <InputPack @getValue="getName" class="mar-bom-small" type="text" placeholder="物资名"></InputPack>
    <InputPack @getValue="getTypeId" class="mar-bom-small" type="text" placeholder="物资类型"></InputPack>
    <InputPack @getValue="getSize" class="mar-bom-small" type="text" placeholder="规格"></InputPack>
    <InputPack @getValue="getUnit" class="mar-bom-small" type="text" placeholder="单位"></InputPack>
    <InputPack @getValue="getWeight" class="mar-bom-small" type="text" placeholder="重量"></InputPack>
    <ButtonPack @click.native="save">保存</ButtonPack>
  </div>
</template>

<script>
// input组件
import InputPack from '@/components/form/InputPack'
// button组件
import ButtonPack from '@/components/form/ButtonPack'
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
  components: {
    InputPack,
    ButtonPack
  },
  computed: {},
  methods: {
    getName (value) {
      this.goods.name = value
    },
    getTypeId (value) {
      this.goods.type_id = value
    },
    getSize (value) {
      this.goods.size = value
    },
    getUnit (value) {
      this.goods.unit = value
    },
    getWeight (value) {
      this.goods.weight = value
    },
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