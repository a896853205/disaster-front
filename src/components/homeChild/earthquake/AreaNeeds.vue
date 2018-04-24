<!-- AreaNeeds.vue
灾区需要物资
'@/components/homeChild/earthquake/AreaNeeds.vue' -->
<template>
  <div>
    <h1>地区需求物资</h1>
    <el-table
      height="400"
      :data="needArr"
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
    <el-button type="primary"
               @click.native="startDistribute">
      开始分配物资
    </el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 地区需求物资数据
      needColumn: []
    }
  },
  components: {},
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
    },
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
    }
  },
  methods: {}
}
</script>
<style scoped>
</style>