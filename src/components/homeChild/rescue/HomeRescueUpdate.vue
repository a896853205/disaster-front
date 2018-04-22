<!-- HomeRescueUpdate.vue
营救点修改情况组件
'@/components/homeChild/rescue/HomeRescueUpdate.vue'
 -->
<template>
  <el-dialog title="修改营救点" :visible.sync="isUpdate" :show-close="false">
    <input type="text" v-model="updateRescue.id" class="hidden">
    <input type="text" placeholder="营救点名" v-model="updateRescue.name">
    <input type="text" placeholder="经度" v-model="updateRescue.longitude">
    <input type="text" placeholder="纬度" v-model="updateRescue.latitude">
    <input type="text" placeholder="是否开启" v-model="updateRescue.switch">
    <div slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: ['updateRescue', 'isUpdate'],
  data () {
    return {
    }
  },
  components: {},
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