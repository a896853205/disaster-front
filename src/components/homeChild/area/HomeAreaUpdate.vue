<!-- HomeAreaUpdate.vue
地区修改组件
'@/components/homeChild/area/HomeAreaUpdate.vue'
 -->
<template>
  <el-dialog title="修改地区" :visible.sync="isUpdate" :show-close="false">
    <input type="text" v-model="updateArea.id" class="hidden">
    <input class="input-pack mar-bom-small" type="text" placeholder="地区名" v-model="updateArea.name">
    <input class="input-pack mar-bom-small" type="text" placeholder="人口总数" v-model="updateArea.population">
    <input class="input-pack mar-bom-small" type="text" placeholder="人口密度" v-model="updateArea.density">
    <input class="input-pack mar-bom-small" type="text" placeholder="经度" v-model="updateArea.latitude">
    <input class="input-pack mar-bom-small" type="text" placeholder="纬度" v-model="updateArea.longitude">
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
  props: ['updateArea', 'isUpdate'],
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