<!-- AreaSelect.vue -->
<template>
  <div>
    // 地区选择模块(哪地震了)
    <el-table
      height="400"
      :data="allArea"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="id"
        label="编号">
      </el-table-column>
      <el-table-column
        prop="name"
        label="地区名">
      </el-table-column>
      <el-table-column
        prop="population"
        label="人口总数">
      </el-table-column>
      <el-table-column
        prop="density"
        label="人口密度">
      </el-table-column>
      <el-table-column
        prop="longitude"
        label="经度">
      </el-table-column>
      <el-table-column
        prop="latitude"
        label="纬度">
      </el-table-column>
      <el-table-column
        label="烈度">
        <template slot-scope="scope">
          <el-select v-model="scope.row.lieValue"
                     placeholder="请选择烈度">
            <el-option
              v-for="item in lieOptions"
              :key="item.id"
              :label="item.level"
              :value="item.coeffcient">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column
        label="房屋倒塌率">
        <template slot-scope="scope">
          <el-input
            placeholder="输入倒塌率"
            v-model="scope.row.collapseValue"
            clearable>
            <template slot="append">%</template>
          </el-input>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary"
               @click.native="startEarthquake">
      开始地震
    </el-button>
    <!--  -->
    <el-table
      height="400"
      :data="needArr"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      allArea: [],
      lieOptions: [],
      lieValue: [],
      collapseValue: [],
      multipleSelection: [],
      needArr: [],
      needColumn: []
    }
  },
  components: {},
  computed: {},
  methods: {
    /**
     * 开始模拟地震
     */
    startEarthquake () {
      // 将这个数组与后台数组进行处理
      // this.multipleSelection
      this.$http.post('/computed/computedNeed',
      this.multipleSelection)
      .then(res => {
        let needArr = []
        res.data.needResult.forEach(needItem => {
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
        console.log(this.needColumn)
        console.log(needArr)
        this.needArr = needArr
      })
    },
    /**
     * 表格选中改变函数
     */
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    }
  },
  beforeMount () {
    // 这里查询所有地区的情况
    this.$http.get('/area/getAllArea')
    .then(res => {
      this.allArea = res.data.allArea
    })
    // 查询所有烈度选项
    this.$http.get('/strength/getAllStrength')
    .then(res => {
      this.lieOptions = res.data.allStrength
    })
  }
}
</script>
<style scoped>
</style>