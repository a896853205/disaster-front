<!-- HomeGoodsUpdate.vue
货物修改组件
'@/components/homeChild/goods/HomeGoodsUpdate.vue'
 -->
<template>
  <el-dialog title="修改货物" :visible.sync="isUpdate" :show-close="false">
    <input type="text" v-model="updateGoods.id" class="hidden">
    <input class="input-pack mar-bom-small" type="text" placeholder="货物名" v-model="updateGoods.name">
    <input class="input-pack mar-bom-small" type="text" placeholder="类型" v-model="updateGoods.type_id">
    <input class="input-pack mar-bom-small" type="text" placeholder="尺寸" v-model="updateGoods.size">
    <input class="input-pack mar-bom-small" type="text" placeholder="单位" v-model="updateGoods.unit">
    <input class="input-pack mar-bom-small" type="text" placeholder="重量" v-model="updateGoods.weight">
    <div slot="footer" class="dialog-footer">
      <ButtonPack class="mar-bom-small" @click.native="closeDialog">取 消</ButtonPack>
      <ButtonPack type="primary" @click.native="save">确 定</ButtonPack>
    </div>
  </el-dialog>
</template>

<script>
// button组件
import ButtonPack from '@/components/form/ButtonPack'
export default {
  props: ['updateGoods', 'isUpdate'],
  data () {
    return {
    }
  },
  components: {
    ButtonPack
  },
  computed: {},
  methods: {
    save () {
      // 发出修改请求
      this.$http.post('/home/updateGoods', this.updateGoods)
      .then(res => {
        this.$notify({
          title: '修改货物',
          message: '成功',
          duration: 1000
        })
      })
      // 关闭模态框
      this.closeDialog()
    },
    /**
     * 关闭模态框
     */
    closeDialog () {
      this.$emit('close-dialog')
    }
  }
}
</script>
<style scoped>
</style>