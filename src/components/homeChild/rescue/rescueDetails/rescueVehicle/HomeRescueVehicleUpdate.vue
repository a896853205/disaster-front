<!-- HomeRescueVehicleUpdate.vue
物资点车辆修改组件
'@/components/homeChild/rescue/rescueGoods/rescueVehicle/HomeRescueVehicleUpdate.vue'
 -->
<template>
  <el-dialog title="修改营救点交通工具" :visible.sync="isVehicleUpdate" :show-close="false">
    <input type="text" v-model="updateRescueVehicle.id" class="hidden">
    <input class="input-pack mar-bom-small" v-model="updateRescueVehicle.amount" placeholder="数量">
    <div slot="footer" class="dialog-footer">
      <ButtonPack class="mar-bom-small" @click.native="closeDialog">取 消</ButtonPack>
      <ButtonPack @click.native="save">确 定</ButtonPack>
    </div>
  </el-dialog>
</template>

<script>
// button组件
import ButtonPack from '@/components/form/ButtonPack'
export default {
  props: ['updateRescueVehicle', 'isVehicleUpdate'],
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
      this.$http.post('/home/updateRescueVehicle', this.updateRescueVehicle)
      .then(res => {
        this.$notify({
          title: '修改营救点交通工具',
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