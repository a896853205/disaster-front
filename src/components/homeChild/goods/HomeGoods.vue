<!-- HomeGoods.vue
物资情况组件
'@/components/homeChild/goods/HomeGoods.vue' -->
<template>
  <FlowContainer>
    <FlowColumn col="8">
      <FlowItem>
        <FlowItemHead>物品字典</FlowItemHead>
        <el-table
          :data="goods"
          border
          style="width: 100%"
          :cell-style="cellStyle"
          :header-row-style="headerRowStyle"
          :header-cell-style="headerRowStyle">
          <el-table-column
            prop="name"
            label="物资名">
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
            label="操作"
            width="80">
            <template slot-scope="scope">
              <i class="iconfont icon-pen" @click="handleEdit(scope.$index, scope.row)"></i>
              <i class="iconfont icon-bin" @click="handleDelete(scope.$index, scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>
      </FlowItem>
    </FlowColumn>
    <FlowColumn col="4">
      <FlowItem>
        <FlowItemHead>增加物品表单</FlowItemHead>
        <HomeGoodsAdd @add-success="showAllGoods"></HomeGoodsAdd>
      </FlowItem>
      <FlowItem>
        <FlowItemHead>增加物品详情规则</FlowItemHead>
        <ul class="describe-ul">
          <li>
            <strong>[物资名]</strong>
            <span>物资的名称</span>
          </li>
          <li>
            <strong>[物资类型]</strong>
            <span>物资所属的类型(4种其一)</span>
          </li>
          <li>
            <strong>[规格]</strong>
            <span>物资的正常规格</span>
          </li>
          <li>
            <strong>[单位]</strong>
            <span>物资的所用单位</span>
          </li>
          <li>
            <strong>[重量]</strong>
            <span>物资单位所用重量</span>
          </li>
        </ul>
      </FlowItem>
      <FlowItem>
        <FlowItemHead>物品重量雷达图</FlowItemHead>
        <HomeGoodsRadar :goodsData="goods"></HomeGoodsRadar>
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
// flow布局布局头部
import FlowItemHead from '@/components/layOut/flow/FlowItemHead'
// 增加物资情况组件
import HomeGoodsAdd from '@/components/homeChild/goods/HomeGoodsAdd.vue'
// 雷达图
import HomeGoodsRadar from '@/components/homeChild/goods/HomeGoodsRadar.vue'
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
    FlowItemHead,
    HomeGoodsUpdate,
    HomeGoodsRadar
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
    this.showAllGoods()
  }
}
</script>
<style scoped>
.iconfont {
  margin-left: 5px;
  margin-right: 5px;
}
</style>