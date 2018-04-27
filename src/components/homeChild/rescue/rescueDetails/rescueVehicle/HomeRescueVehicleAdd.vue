<!-- HomeRescueVehicleAdd.vue
物资点物资增加组件
'@/components/homeChild/rescue/rescueGoods/rescueVehicle/HomeRescueVehicleAdd.vue' -->
<template>
  <div>
    <el-select v-model="addRescueVehicle.id"  class="mar-bom-small" placeholder="请选择">
      <el-option
        v-for="item in addRescueVehicleDictionariy"
        :key="item.id"
        :label="item.name"
        :value="item.id">
      </el-option>
    </el-select>
    <InputPack @getValue="getRescueVehicle" class="mar-bom-small" placeholder="初始数量"></InputPack>
    <ButtonPack @click.native="save">保存</ButtonPack>
  </div>
</template>

<script>
// input组件
import InputPack from '@/components/form/InputPack'
// button组件
import ButtonPack from '@/components/form/ButtonPack'
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
  components: {
    InputPack,
    ButtonPack
  },
  computed: {},
  methods: {
    getRescueVehicle (value) {
      this.addRescueVehicle.amount = value
    },
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