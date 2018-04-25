<!-- AreaNeedsRescue.vue
灾区需要物资点具体货物
'@/components/homeChild/earthquake/AreaNeedsRescue.vue' -->
<template>
  <FlowContainer>
    <FlowColumn col="6">
      <FlowItem>
        <h1>灾区需要物资点具体货物</h1>
        <el-table
          :data="areaNeedResult"
          tooltip-effect="dark"
          style="width: 100%"
        >
          <!-- <el-table-column
            prop="area_id"
            label="地区编号">
          </el-table-column> -->
          <el-table-column
            prop="area_name"
            label="地区名">
          </el-table-column>
          <!-- <el-table-column
            prop="rescue_id"
            label="物资点编号">
          </el-table-column> -->
          <el-table-column
            prop="rescue_name"
            label="物资点名">
          </el-table-column>
          <!-- <el-table-column
            prop="good_id"
            label="货物id">
          </el-table-column> -->
          <el-table-column
            prop="good_name"
            label="货物名">
          </el-table-column>
          <el-table-column
            prop="amount"
            label="需要数量">
          </el-table-column>
        </el-table>
        <el-button type="primary"
               @click.native="startLoad">
          开始整理装载
        </el-button>
      </FlowItem>
    </FlowColumn>
    <FlowColumn col="6">
      <FlowItem>
        物资点缺少的货物
        <el-table
          height="400"
          :data="unPut"
          tooltip-effect="dark"
          style="width: 100%">
          <el-table-column
            prop="area_name"
            label="地区名">
          </el-table-column>
          <el-table-column
            :key="index"
            v-for="(needItem, index) in needColumn"
            :prop="needItem.prop"
            :label="needItem.label">
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
export default {
  data () {
    return {
      needColumn: []
    }
  },
  components: {
    FlowContainer,
    FlowColumn,
    FlowItem
  },
  computed: {
    /**
     * 灾区需要物资点具体货物
     */
    areaNeedResult () {
      return this.$store.state.Earthquake.areaNeedResult
    },
    /**
     * 需求不足量
     */
    unPut () {
      let needResult = this.$store.state.Earthquake.unPut
      let unPut = []
      needResult.forEach(needItem => {
        // 设置表头
        let isHasColumn = false
        this.needColumn.forEach(column => {
          if (column.prop === needItem.good_id) {
            isHasColumn = true
          }
        })
        if (!isHasColumn) {
          this.needColumn.push({
            prop: needItem.good_id,
            label: needItem.good_name
          })
        }
        // 设置内容
        let hasArea = false
        unPut.forEach(calcItem => {
          if (calcItem.area_id === needItem.area_id) {
            hasArea = true
            calcItem[needItem.good_id] = needItem.needNum
          }
        })
        if (!hasArea) {
          unPut.push({
            area_id: needItem.area_id,
            area_name: needItem.area_name
          })
          unPut.forEach(calcItem => {
            if (calcItem.area_id === needItem.area_id) {
              calcItem[needItem.good_id] = needItem.needNum
            }
          })
        }
      })
      return unPut
    }
  },
  methods: {
    /**
     * 开始装载
     */
    startLoad () {
      this.$http.post('/home/computedUpLoad',
      this.areaNeedResult)
      .then(res => {
        // commit 然后跳页
        this.$store.commit(
        'setUpLoadArr',
        res.data.upLoadArr)
        location.href = '/#/home/earthquake/RescueUpLoad'
      })
    }
  }
}
</script>
<style scoped>
</style>