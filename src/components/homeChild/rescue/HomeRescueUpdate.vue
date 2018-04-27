<!-- HomeRescueUpdate.vue
营救点修改情况组件
'@/components/homeChild/rescue/HomeRescueUpdate.vue'
 -->
<template>
  <el-dialog title="修改营救点" :visible.sync="isUpdate" :show-close="false">
    <input type="text" v-model="updateRescue.id" class="hidden">
    <input class="input-pack mar-bom-small" type="text" placeholder="营救点名" v-model="updateRescue.name">
    <input class="input-pack mar-bom-small" type="text" placeholder="经度" v-model="updateRescue.longitude">
    <input class="input-pack mar-bom-small" type="text" placeholder="纬度" v-model="updateRescue.latitude">
    <input class="input-pack mar-bom-small" type="text" placeholder="是否开启" v-model="updateRescue.switch">
    <div slot="footer" class="dialog-footer">
      <ButtonPack  class="mar-bom-small" @click.native="closeDialog">取 消</ButtonPack>
      <ButtonPack @click.native="save">确 定</ButtonPack>
    </div>
  </el-dialog>
</template>

<script>
// button组件
import ButtonPack from '@/components/form/ButtonPack'
export default {
  props: ['updateRescue', 'isUpdate'],
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
      this.updateRescue.open = this.updateRescue.switch
      this.$http.post('/home/updateRescue', this.updateRescue)
      .then(res => {
        this.$notify({
          title: '修改营救点',
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