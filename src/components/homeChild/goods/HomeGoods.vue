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
            prop="type_id"
            label="类型"
            :formatter="getTypeName">
          </el-table-column>
          <el-table-column
            prop="unit"
            label="单位">
          </el-table-column>
          <el-table-column
            prop="weight"
            label="重量">
          </el-table-column>
        </el-table>
      </FlowItem>
    </FlowColumn>
    <FlowColumn col="4">
      <FlowItem>
        <HomeGoodsAdd></HomeGoodsAdd>
      </FlowItem>
      <FlowItem>
        增加描述
      </FlowItem>
    </FlowColumn>
  </FlowContainer>
</template>

<script>
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
      goods: []
    }
  },
  components: {
    HomeGoodsAdd,
    FlowContainer,
    FlowColumn,
    FlowItem
  },
  computed: {},
  methods: {
    getTypeName (row, col, cellValue) {
      if (cellValue === '1') {
        return '生命类一次'
      } else if (cellValue === '2') {
        return '生命类循环'
      } else if (cellValue === '3') {
        return '生活类一次'
      } else if (cellValue === '4') {
        return '生活类循环'
      }
    }
  },
  beforeMount () {
    this.$http.get('/home/getAllGoods')
    .then(res => {
      this.goods = res.data.allGoods
    })
  }
}
</script>
<style scoped>
</style>