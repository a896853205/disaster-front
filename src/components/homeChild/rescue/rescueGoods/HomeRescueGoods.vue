<!-- HomeRescueGoods.vue
物资点物资情况组件
'@/components/homeChild/rescue/rescueGoods/HomeRescueGoods.vue' -->
<template>
  <FlowContainer>
    <FlowColumn col='6'>
      <FlowItem>
        <el-table
          :data="rescueGoods"
          height="680"
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
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button><el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </FlowItem>
    </FlowColumn>
    <FlowColumn col='6'>
      <FlowItem>
        图表
      </FlowItem>
      <FlowItem>
        <HomeRescueGoodsAdd @add-success="pageInit"
                            :addRescueGoodsDictionariy="addRescueGoodsDictionariy"></HomeRescueGoodsAdd>
      </FlowItem>
    </FlowColumn>
    <HomeRescueGoodsUpdate @close-dialog="closeDialog"
                           :updateRescueGoods = updateRescueGoods
                           :isUpdate = isUpdate></HomeRescueGoodsUpdate>
  </FlowContainer>
</template>

<script>
// 物资点物资修改组件
import HomeRescueGoodsUpdate from '@/components/homeChild/rescue/rescueGoods/HomeRescueGoodsUpdate.vue'
// 物资点物资增加组件
import HomeRescueGoodsAdd from '@/components/homeChild/rescue/rescueGoods/HomeRescueGoodsAdd.vue'
// flow布局大框架
import FlowContainer from '@/components/layOut/flow/FlowContainer'
// flow布局每条列
import FlowColumn from '@/components/layOut/flow/FlowColumn'
// flow布局每条列
import FlowItem from '@/components/layOut/flow/FlowItem'
export default {
  data () {
    return {
      rescueGoods: [],
      allGoods: [],
      addRescueGoodsDictionariy: [],
      isUpdate: false,
      updateRescueGoods: {}
    }
  },
  components: {
    FlowContainer,
    FlowColumn,
    FlowItem,
    HomeRescueGoodsAdd,
    HomeRescueGoodsUpdate
  },
  computed: {},
  methods: {
    pageInit () {
      // 每次都要清空这个选择栏
      this.addRescueGoodsDictionariy = []
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
    },
    /**
     * 删除营救点物资信息
     */
    handleDelete (index, row) {
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
    /**
     * 修改营救点物资信息
     */
    handleEdit (index, row) {
      this.updateRescueGoods = this.rescueGoods[index]
      this.isUpdate = true
    },
    /**
     * 关闭模态框
     */
    closeDialog () {
      this.pageInit()
      this.isUpdate = false
    }
  },
  beforeMount () {
    this.pageInit()
  }
}
</script>
<style scoped>
</style>