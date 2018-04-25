<!-- HomeAreaUpdate.vue
地区修改组件
'@/components/homeChild/area/HomeAreaUpdate.vue'
 -->
<template>
  <el-dialog title="修改地区" :visible.sync="isUpdate" :show-close="false">
    <input type="text" v-model="updateArea.id" class="hidden">
    <input type="text" placeholder="地区名" v-model="updateArea.name">
    <input type="text" placeholder="人口总数" v-model="updateArea.population">
    <input type="text" placeholder="人口密度" v-model="updateArea.density">
    <input type="text" placeholder="经度" v-model="updateArea.latitude">
    <input type="text" placeholder="纬度" v-model="updateArea.longitude">
    <div slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: ['updateArea', 'isUpdate'],
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  methods: {
    save () {
      // 发出修改请求
      this.$http.post('/home/updateArea', this.updateArea)
      .then(res => {
        this.$notify({
          title: '修改地区',
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