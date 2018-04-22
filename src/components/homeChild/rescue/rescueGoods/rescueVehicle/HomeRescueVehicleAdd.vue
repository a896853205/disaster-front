<!-- HomeRescueVehicleAdd.vue
物资点物资增加组件
'@/components/homeChild/rescue/rescueGoods/rescueVehicle/HomeRescueVehicleAdd.vue' -->
<template>
  <div>
    <el-select v-model="addRescueVehicle.id" placeholder="请选择">
      <el-option
        v-for="item in addRescueVehicleDictionariy"
        :key="item.id"
        :label="item.name"
        :value="item.id">
      </el-option>
    </el-select>
    <input v-model="addRescueVehicle.amount" placeholder="初始数量" type="text">
    <button @click="save">保存</button>
  </div>
</template>

<script>
export default {
  props: ['addRescueVehicleDictionariy'],
  data () {
    return {
      addRescueVehicle: {
        id: '',
        amount: ''
      }
    }
  },
  components: {},
  computed: {},
  methods: {
    save () {
      this.$http.post('/home/addRescueVehicle', {vehicleInfo: this.addRescueVehicle, rescueId: this.$route.params.id})
      .then(res => {
        this.$notify({
          title: '增加营救点交通工具',
          message: '成功',
          duration: 1000
        })
        // 初始化选择栏
        this.addRescueVehicle = {
          id: '',
          amount: ''
        }
        this.$emit('add-success')
      })
    }
  }
}
</script>
<style scoped>
</style>