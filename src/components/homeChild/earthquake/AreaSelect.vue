<!-- AreaSelect.vue -->
<template>
  <div>
    <h1>地区选择模块(哪地震了)</h1>
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
    <h1>地区需求物资</h1>
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
    <el-button type="primary"
               @click.native="startDistribute">
      开始分配物资
    </el-button>
    <h1>灾区需要物资点具体货物</h1>
    <el-table
      :data="areaNeedResult"
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column
        prop="area_id"
        label="地区编号">
      </el-table-column>
      <el-table-column
        prop="area_name"
        label="地区名">
      </el-table-column>
      <el-table-column
        prop="rescue_id"
        label="物资点编号">
      </el-table-column>
      <el-table-column
        prop="good_id"
        label="货物id">
      </el-table-column>
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
    <h1>装载具体表</h1>
    <el-table
      :data="upLoadArr"
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column
        prop="vehicle_id"
        label="交通类型id">
      </el-table-column>
      <el-table-column
        prop="vehicle_name"
        label="交通类型">
      </el-table-column>
      <el-table-column
        prop="area_id"
        label="灾区id">
      </el-table-column>
      <el-table-column
        prop="area_name"
        label="灾区名">
      </el-table-column>
      <el-table-column
        prop="rescue_id"
        label="物资点id">
      </el-table-column>
      <el-table-column
        prop="good_id"
        label="货物id">
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 地区数据开始
      allArea: [],
      lieOptions: [],
      lieValue: [],
      collapseValue: [],
      multipleSelection: [],
      // 地区数据结束
      // 地区需求物资数据开始
      needArr: [],
      needColumn: [],
      needResult: [],
      // 地区需求物资数据结束
      // 地区需求物资点物资数据开始
      areaNeedResult: [],
      unPut: [],
      // 地区需求物资点物资数据结束
      upLoadArr: []
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
      this.$http.post('/home/computedNeed',
      this.multipleSelection)
      .then(res => {
        let needArr = []
        // 暂存下一步使用
        this.needResult = res.data.needResult
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
        this.needArr = needArr
      })
    },
    /**
     * 开始分配物资
     */
    startDistribute () {
      this.$http.post('/home/computedAreaNeed',
      this.needResult)
      .then(res => {
        this.areaNeedResult = res.data.areaNeedResult
        this.unPut = res.data.unPut
      })
    },
    /**
     * 开始装载
     */
    startLoad () {
      this.$http.post('/home/computedUpLoad',
      this.areaNeedResult)
      .then(res => {
        console.log(res.data.upLoadArr)
        this.upLoadArr = res.data.upLoadArr
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
    this.$http.get('/home/getAllArea')
    .then(res => {
      this.allArea = res.data.allArea
    })
    // 查询所有烈度选项
    this.$http.get('/home/getAllStrength')
    .then(res => {
      this.lieOptions = res.data.allStrength
    })
  }
}
</script>
<style scoped>
</style>