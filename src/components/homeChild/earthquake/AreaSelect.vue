<!-- AreaSelect.vue
地区选择板块(哪里地震了)
'@/components/homeChild/earthquake/AreaSelect.vue' -->
<template>
  <FlowContainer>
    <FlowColumn col="12">
      <FlowItem>
        <FlowItemHead>
          地区选择模块
        </FlowItemHead>
        <el-table
          :data="allArea"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
          :cell-style="cellStyle"
          :header-row-style="headerRowStyle"
          :header-cell-style="headerRowStyle">
          <el-table-column
            type="selection"
            width="55">
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
      </FlowItem>
      <FlowItem :transparent="true">
        <div class="button-item">
          <ButtonPack @click.native="startEarthquake">
            开始地震
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
      // 地区数据开始
      allArea: [],
      lieOptions: [],
      lieValue: [],
      collapseValue: [],
      multipleSelection: []
    }
  },
  components: {
    ButtonPack,
    FlowItemHead,
    FlowContainer,
    FlowColumn,
    FlowItem
  },
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
        // 这里先commit 后跳页
        this.$store.commit(
          'setNeedArr',
          res.data.needResult)
        location.href = '/#/home/earthquake/areaNeeds'
      })
    },
    /**
     * 表格选中改变函数
     */
    handleSelectionChange (val) {
      this.multipleSelection = val
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
<style scoped></style>