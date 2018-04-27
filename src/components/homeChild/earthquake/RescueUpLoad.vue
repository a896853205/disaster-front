<!-- RescueUpLoad.vue
装载具体表
'@/components/homeChild/earthquake/RescueUpLoad.vue'
 -->
<template>
  <FlowContainer>
    <FlowColumn col="12">
      <FlowItem>
        <FlowItemHead>装载具体表</FlowItemHead>
        <el-table
          :data="upLoadArr"
          tooltip-effect="dark"
          style="width: 100%"
          max-height="630"
          :cell-style="cellStyle"
          :header-row-style="headerRowStyle"
          :header-cell-style="headerRowStyle"
        >
          <el-table-column
            prop="vehicle_id"
            label="交通类型id"
            :show-overflow-tooltip="true"
            sortable>
          </el-table-column>
          <el-table-column
            prop="vehicle_name"
            label="交通类型">
          </el-table-column>
          <el-table-column
            prop="area_name"
            label="灾区名">
          </el-table-column>
          <el-table-column
            prop="rescue_name"
            label="物资点id">
          </el-table-column>
          <el-table-column
            prop="good_name"
            label="货物名称">
          </el-table-column>
          <el-table-column
            prop="amount"
            label="数量">
          </el-table-column>
          <el-table-column
            prop="level"
            label="优先级">
          </el-table-column>
        </el-table>
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
// button组件
import ButtonPack from '@/components/form/ButtonPack'
// 布局头部
import FlowItemHead from '@/components/layOut/flow/FlowItemHead'

export default {
  data () {
    return {
    }
  },
  components: {
    FlowContainer,
    FlowColumn,
    FlowItem,
    FlowItemHead,
    ButtonPack
  },
  computed: {
    /**
     * 装载具体表
     */
    upLoadArr () {
      return this.$store.state.Earthquake.upLoadArr
    }
  },
  methods: {
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
  }
}
</script>
<style scoped>
</style>