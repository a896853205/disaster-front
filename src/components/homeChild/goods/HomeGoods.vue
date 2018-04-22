<!-- HomeGoods.vue
物资情况组件
'@/components/homeChild/goods/HomeGoods.vue' -->
<template>
  <FlowContainer>
    <FlowColumn col="8">
      <FlowItem>
        <el-table
          :data="goods"
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
            prop="typeName"
            label="类型">
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
            label="操作">
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
    <FlowColumn col="4">
      <FlowItem>
        <HomeGoodsAdd @add-success="showAllGoods"></HomeGoodsAdd>
      </FlowItem>
      <FlowItem>
        增加描述
      </FlowItem>
    </FlowColumn>
    <HomeGoodsUpdate @close-dialog="closeDialog"
                    :updateGoods = updateGoods
                    :isUpdate = isUpdate></HomeGoodsUpdate>
  </FlowContainer>
</template>

<script>
// 货物修改组件
import HomeGoodsUpdate from '@/components/homeChild/goods/HomeGoodsUpdate.vue'
// flow布局大框架
import FlowContainer from '@/components/layOut/flow/FlowContainer'
// flow布局每条列
import FlowColumn from '@/components/layOut/flow/FlowColumn'
// flow布局每条列
import FlowItem from '@/components/layOut/flow/FlowItem'
// 增加物资情况组件
import HomeGoodsAdd from '@/components/homeChild/goods/HomeGoodsAdd.vue'
export default {
  data () {
    return {
      goods: [],
      updateGoods: {},
      isUpdate: false
    }
  },
  components: {
    HomeGoodsAdd,
    FlowContainer,
    FlowColumn,
    FlowItem,
    HomeGoodsUpdate
  },
  computed: {},
  methods: {
    /**
     * 打开编辑模态框
     */
    handleEdit (index, row) {
      this.updateGoods = this.goods[index]
      this.isUpdate = true
    },
    /**
     * 关闭模态框
     */
    closeDialog () {
      this.showAllGoods()
      this.isUpdate = false
    },
    /**
     * 删除事件
     */
    handleDelete (index, row) {
      this.$http.post('/home/deleteGoods', {id: this.goods[index].id})
      .then(res => {
        this.$notify({
          title: '删除货物',
          message: '成功',
          duration: 1000
        })
        this.showAllGoods()
      })
    },
    showAllGoods () {
      this.$http.get('/home/getAllGoods')
      .then(res => {
        this.goods = res.data.allGoods
      })
    }
  },
  beforeMount () {
    this.showAllGoods()
  }
}
</script>
<style scoped>
</style>