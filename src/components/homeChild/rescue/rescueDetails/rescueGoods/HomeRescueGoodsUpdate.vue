<!-- HomeRescueGoodsUpdate.vue
物资点物资修改组件
'@/components/homeChild/rescue/rescueDetails/rescueGoods/HomeRescueGoodsUpdate.vue' -->
<template>
  <el-dialog title="修改营救点物资" :visible.sync="isUpdate" :show-close="false">
    <input type="text" v-model="updateRescueGoods.id" class="hidden">
    <input class="input-pack mar-bom-small" v-model="updateRescueGoods.amount" placeholder="数量">
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
  props: ['updateRescueGoods', 'isUpdate'],
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
      this.$http.post('/home/updateRescueGoods', this.updateRescueGoods)
      .then(res => {
        this.$notify({
          title: '修改营救点物资',
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