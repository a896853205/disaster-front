<!-- HomeRescueGoods.vue
物资点物资情况组件
'@/components/homeChild/rescue/rescueDetails/HomeRescueDetails.vue' -->
<template>
  <FlowContainer>
    <FlowColumn col='6'>
      <FlowItem>
        <FlowItemHead>
          物资点物资总览
        </FlowItemHead>
        <el-table
          :data="rescueGoods"
          border
          style="width: 100%"
          :cell-style="cellStyle"
          :header-row-style="headerRowStyle"
          :header-cell-style="headerRowStyle">
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
            label="单位">
          </el-table-column>
          <el-table-column
            prop="weight"
            label="重量">
          </el-table-column>
          <el-table-column
            prop="amount"
            label="数量">
          </el-table-column>
          <el-table-column
            label="操作"
            width="80">
            <template slot-scope="scope">
              <i class="iconfont icon-pen" @click="handleGoodsEdit(scope.$index, scope.row)"></i>
              <i class="iconfont icon-bin" @click="handleGoodsDelete(scope.$index, scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>
      </FlowItem>
      <FlowItem>
        <FlowItemHead>
          物资点交通工具总览
        </FlowItemHead>
        <el-table
          :data="rescueVehicle"
          border
          style="width: 100%"
          :cell-style="cellStyle"
          :header-row-style="headerRowStyle"
          :header-cell-style="headerRowStyle">
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
            width="80">
            <template slot-scope="scope">
              <i class="iconfont icon-pen" @click="handleVehicleEdit(scope.$index, scope.row)"></i>
              <i class="iconfont icon-bin" @click="handleVehicleDelete(scope.$index, scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>
      </FlowItem>
    </FlowColumn>
    <FlowColumn col='6'>
      <FlowItem :transparent="true">
        <FlowItemHead>
          物资点饼图总览
        </FlowItemHead>
        <HomeRescueDetailsPie :detailsData="{rescueGoods, rescueVehicle}"></HomeRescueDetailsPie>
      </FlowItem>
      <FlowContainer>
        <FlowColumn col='6'>
          <FlowItem>
            <FlowItemHead>
              物资点初始化物资
            </FlowItemHead>
            <HomeRescueGoodsAdd @add-success="pageInit"
                                :addRescueGoodsDictionariy="addRescueGoodsDictionariy">
            </HomeRescueGoodsAdd>
          </FlowItem>
        </FlowColumn>
        <FlowColumn col='6'>
          <FlowItem>
            <FlowItemHead>
              物资点初始化交通工具
            </FlowItemHead>
            <HomeRescueVehicleAdd @add-success="pageInit"
                                :addRescueVehicleDictionariy="addRescueVehicleDictionariy">
            </HomeRescueVehicleAdd>
          </FlowItem>
        </FlowColumn>
      </FlowContainer>
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
// flow布局布局头部
import FlowItemHead from '@/components/layOut/flow/FlowItemHead'
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
    FlowItemHead,
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
    },
    /* 表格样式 */
    cellStyle () {
      return {
        backgroundColor: 'rgb(206, 197, 190)',
        borderColor: '#584f4a'
      }
    },
    headerRowStyle () {
      return {
        backgroundColor: '#584f4a',
        color: '#fff',
        borderColor: 'rgb(206, 197, 190)'
      }
    }
  },
  beforeMount () {
    this.pageInit()
  }
}
</script>
<style scoped>
.iconfont {
  margin-left: 5px;
  margin-right: 5px;
}
</style>