<!-- HomeRescueGoodsUpdate.vue
物资点物资修改组件
'@/components/homeChild/rescue/rescueDetails/rescueGoods/HomeRescueGoodsUpdate.vue' -->
<template>
  <el-dialog title="修改营救点物资" :visible.sync="isUpdate" :show-close="false">
    <input type="text" v-model="updateRescueGoods.id" class="hidden">
    <input v-model="updateRescueGoods.amount" placeholder="数量">
    <div slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: ['updateRescueGoods', 'isUpdate'],
  data () {
    return {
    }
  },
  components: {},
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