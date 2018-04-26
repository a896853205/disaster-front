<!-- AreaNeeds.vue
灾区需要物资
'@/components/homeChild/earthquake/AreaNeeds.vue' -->
<template>
  <FlowContainer>
    <FlowColumn col="12">
      <FlowItem>
        <FlowItemHead>地区需求物资</FlowItemHead>
        <el-table
          :data="needArr"
          style="width: 100%"
          :cell-style="cellStyle"
          :header-row-style="headerRowStyle"
          :header-cell-style="headerRowStyle">
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
      <FlowItem :transparent="true">
        <div class="button-item">
          <ButtonPack @click.native="startDistribute">
            开始分配物资
          </ButtonPack>
        </div>
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
      // 地区需求物资数据
      needColumn: []
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
     * 灾区需求返回值
     */
    needResult () {
      return this.$store.state.Earthquake.needArr
    },
    /**
     * 灾区需求数组修改成展示数组
     */
    needArr () {
      let needResult = this.needResult
      let needArr = []
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
        needArr.forEach(calcItem => {
          if (calcItem.area_id === needItem.area_id) {
            hasArea = true
            calcItem[needItem.good_id] = needItem.needNum
          }
        })
        if (!hasArea) {
          needArr.push({
            area_id: needItem.area_id,
            area_name: needItem.area_name
          })
          needArr.forEach(calcItem => {
            if (calcItem.area_id === needItem.area_id) {
              calcItem[needItem.good_id] = needItem.needNum
            }
          })
        }
      })
      return needArr
    }
  },
  methods: {
    /**
     * 开始分配物资
     */
    startDistribute () {
      this.$http.post('/home/computedAreaNeed',
      this.needResult)
      .then(res => {
        // 这里commit 然后跳页
        this.$store.commit(
          'setAreaNeedResult',
          res.data.areaNeedResult)
        this.$store.commit(
        'setUnPut',
        res.data.unPut)
        location.href = '/#/home/earthquake/AreaNeedsRescue'
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
  }
}
</script>
<style scoped>
</style>