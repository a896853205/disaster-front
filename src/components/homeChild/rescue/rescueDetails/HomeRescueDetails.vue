<!-- HomeRescueGoods.vue
物资点物资情况组件
'@/components/homeChild/rescue/rescueDetails/HomeRescueDetails.vue' -->
<template>
  <FlowContainer>
    <FlowColumn col='6'>
      <FlowItem>
        <el-table
          :data="rescueGoods"
          height="330"
          border
          style="width: 100%">
          <el-table-column
            prop="name"
            label="地点名">
          </el-table-column>
          <el-table-column
            prop="size"
            label="尺寸">
          </el-table-column>
          <el-table-column
            prop="unit"
            label="单位"
            width="60">
          </el-table-column>
          <el-table-column
            prop="weight"
            label="重量"
            width="50">
          </el-table-column>
          <el-table-column
            prop="amount"
            label="数量"
            width="50">
          </el-table-column>
          <el-table-column
            prop="typeName"
            label="类型名">
          </el-table-column>
          <el-table-column
            label="操作"
            width="150">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleGoodsEdit(scope.$index, scope.row)">编辑</el-button><el-button
                size="mini"
                type="danger"
                @click="handleGoodsDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </FlowItem>
      <FlowItem>
        <el-table
          :data="rescueVehicle"
          height="330"
          border
          style="width: 100%">
          <el-table-column
            prop="name"
            label="交通工具名">
          </el-table-column>
          <el-table-column
            prop="load"
            label="装载量">
          </el-table-column>
          <el-table-column
            prop="amount"
            label="数量">
          </el-table-column>
          <el-table-column
            label="操作"
            width="150">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleVehicleEdit(scope.$index, scope.row)">编辑</el-button><el-button
                size="mini"
                type="danger"
                @click="handleVehicleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </FlowItem>
    </FlowColumn>
    <FlowColumn col='6'>
      <FlowItem>
        <HomeRescueDetailsPie :detailsData="{rescueGoods, rescueVehicle}"
        ></HomeRescueDetailsPie>
      </FlowItem>
      <FlowItem>
        <HomeRescueGoodsAdd @add-success="pageInit"
                            :addRescueGoodsDictionariy="addRescueGoodsDictionariy"></HomeRescueGoodsAdd>
      </FlowItem>
      <FlowItem>
        <HomeRescueVehicleAdd @add-success="pageInit"
                            :addRescueVehicleDictionariy="addRescueVehicleDictionariy"></HomeRescueVehicleAdd>
      </FlowItem>
    </FlowColumn>
    <HomeRescueGoodsUpdate @close-dialog="closeDialog"
                           :updateRescueGoods = updateRescueGoods
                           :isUpdate = isUpdate></HomeRescueGoodsUpdate>
    <HomeRescueVehicleUpdate @close-dialog="closeDialog"
                            :updateRescueVehicle = updateRescueVehicle
                            :isVehicleUpdate = isVehicleUpdate></HomeRescueVehicleUpdate>
  </FlowContainer>
</template>

<script>
// 物资点车辆修改组件
import HomeRescueVehicleUpdate from '@/components/homeChild/rescue/rescueDetails/rescueVehicle/HomeRescueVehicleUpdate.vue'
// 物资点物资修改组件
import HomeRescueGoodsUpdate from '@/components/homeChild/rescue/rescueDetails/rescueGoods/HomeRescueGoodsUpdate.vue'
// 物资点物资增加组件
import HomeRescueGoodsAdd from '@/components/homeChild/rescue/rescueDetails/rescueGoods/HomeRescueGoodsAdd.vue'
// 物资点车辆增加组件
import HomeRescueVehicleAdd from '@/components/homeChild/rescue/rescueDetails/rescueVehicle/HomeRescueVehicleAdd.vue'
// flow布局大框架
import FlowContainer from '@/components/layOut/flow/FlowContainer'
// flow布局每条列
import FlowColumn from '@/components/layOut/flow/FlowColumn'
// flow布局每条列
import FlowItem from '@/components/layOut/flow/FlowItem'
// 物资点细节饼形图
import HomeRescueDetailsPie from '@/components/homeChild/rescue/rescueDetails/HomeRescueDetailsPie.vue'
export default {
  data () {
    return {
      // 营救点物资信息
      rescueGoods: [],
      allGoods: [],
      addRescueGoodsDictionariy: [],
      isUpdate: false,
      updateRescueGoods: {},
      // 营救点车辆信息
      rescueVehicle: [],
      allVehicle: [],
      addRescueVehicleDictionariy: [],
      isVehicleUpdate: false,
      updateRescueVehicle: {}
    }
  },
  components: {
    FlowContainer,
    FlowColumn,
    FlowItem,
    HomeRescueGoodsAdd,
    HomeRescueGoodsUpdate,
    HomeRescueVehicleAdd,
    HomeRescueVehicleUpdate,
    HomeRescueDetailsPie
  },
  computed: {},
  methods: {
    pageInit () {
      // 每次都要清空这个选择栏
      this.addRescueGoodsDictionariy = []
      this.addRescueVehicleDictionariy = []
      this.$http.post('/home/getRescueGoodsById', {id: this.$route.params.id})
      .then(res => {
        this.rescueGoods = res.data.rescueGoods
        return this.$http.get('/home/getAllGoods')
      })
      .then(res => {
        this.allGoods = res.data.allGoods
        let isHave = false
        this.allGoods.forEach(goods => {
          isHave = false
          // 判断该营救点是否有该物资
          this.rescueGoods.forEach(rescueGoods => {
            // 如果有就不添加到添加模块中
            if (goods.id === rescueGoods.goodId) {
              isHave = true
            }
          })
          // 如果没有就放到添加模块中
          if (!isHave) {
            this.addRescueGoodsDictionariy.push(goods)
          }
        })
      })
      this.$http.post('/home/getRescueVehicle', {id: this.$route.params.id})
      .then(res => {
        this.rescueVehicle = res.data.rescueVehicle
        return this.$http.get('/home/getAllVehicle')
      })
      .then(res => {
        this.allVehicle = res.data.allVehicle
        let isHave = false
        this.allVehicle.forEach(vehicle => {
          isHave = false
          this.rescueVehicle.forEach(rescueVehicle => {
            // 如果有就不添加到添加模块中
            if (vehicle.id === rescueVehicle.vehicle_id) {
              isHave = true
            }
          })
          // 如果没有就放到添加模块中
          if (!isHave) {
            this.addRescueVehicleDictionariy.push(vehicle)
          }
        })
      })
    },
    /**
     * 删除营救点物资信息
     */
    handleGoodsDelete (index, row) {
      this.$http.post('/home/deleteRescueGoods', {id: this.rescueGoods[index].id})
      .then(res => {
        this.$notify({
          title: '删除营救点的物资',
          message: '成功',
          duration: 1000
        })
        this.pageInit()
      })
    },
    handleVehicleDelete (index, row) {
      this.$http.post('/home/deleteRescueVehicle', {id: this.rescueVehicle[index].id})
      .then(res => {
        this.$notify({
          title: '删除营救点的交通工具',
          message: '成功',
          duration: 1000
        })
        this.pageInit()
      })
    },
    /**
     * 修改营救点物资信息
     */
    handleGoodsEdit (index, row) {
      this.updateRescueGoods = this.rescueGoods[index]
      this.isUpdate = true
    },
    handleVehicleEdit (index, row) {
      this.updateRescueVehicle = this.rescueVehicle[index]
      this.isVehicleUpdate = true
    },
    /**
     * 关闭模态框
     */
    closeDialog () {
      this.pageInit()
      this.isUpdate = false
      this.isVehicleUpdate = false
    }
  },
  beforeMount () {
    this.pageInit()
  }
}
</script>
<style scoped>
</style>