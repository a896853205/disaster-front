<!-- HomeArea.vue
地区情况组件
'@/components/homeChild/area/HomeArea.vue'
 -->
<template>
  <FlowContainer>
    <FlowColumn col="8">
      <FlowItem>
        <el-table
          :data="area"
          height="340"
          border
          style="width: 100%">
          <el-table-column
            prop="name"
            label="地点名">
          </el-table-column>
          <el-table-column
            prop="density"
            label="人口密度">
          </el-table-column>
          <el-table-column
            prop="latitude"
            label="经度">
          </el-table-column>
          <el-table-column
            prop="longitude"
            label="纬度">
          </el-table-column>
          <el-table-column
            prop="population"
            label="人口数量">
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
      <FlowItem>
        <HomeAreaBarChart :areaData="area"></HomeAreaBarChart>
      </FlowItem>
    </FlowColumn>
    <FlowColumn col="4">
      <FlowItem>
        <HomeAreaAdd @add-success="showAllArea"></HomeAreaAdd>
      </FlowItem>
      <FlowItem>
        <ul class="describe-ul">
          <li>
            <strong>[地点名]</strong>
            <span>预演灾区的地点名</span>
          </li>
          <li>
            <strong>[人口数]</strong>
            <span>地点大概的人口数量</span>
          </li>
          <li>
            <strong>[人口密度]</strong>
            <span>地点人口密度数</span>
          </li>
          <li>
            <strong>[经度]</strong>
            <span>预演灾区的所在经度</span>
          </li>
          <li>
            <strong>[纬度]</strong>
            <span>预演灾区的所在纬度</span>
          </li>
        </ul>
      </FlowItem>
    </FlowColumn>
    <HomeAreaUpdate @close-dialog="closeDialog"
                    :updateArea = updateArea
                    :isUpdate = isUpdate></HomeAreaUpdate>
  </FlowContainer>
</template>

<script>
// 修改模态框
import HomeAreaUpdate from '@/components/homeChild/area/HomeAreaUpdate.vue'
// flow布局大框架
import FlowContainer from '@/components/layOut/flow/FlowContainer'
// flow布局每条列
import FlowColumn from '@/components/layOut/flow/FlowColumn'
// flow布局每条列
import FlowItem from '@/components/layOut/flow/FlowItem'
// 地区增加组件
import HomeAreaAdd from '@/components/homeChild/area/HomeAreaAdd.vue'
// 地区人口数和人口密度的图表条形图
import HomeAreaBarChart from '@/components/homeChild/area/HomeAreaBarChart.vue'
export default {
  data () {
    return {
      area: [],
      updateArea: {},
      isUpdate: false
    }
  },
  components: {
    HomeAreaAdd,
    FlowContainer,
    FlowColumn,
    FlowItem,
    HomeAreaUpdate,
    HomeAreaBarChart
  },
  computed: {},
  methods: {
    /**
     * 打开编辑模态框
     */
    handleEdit (index, row) {
      this.updateArea = this.area[index]
      this.isUpdate = true
    },
    /**
     * 删除事件
     */
    handleDelete (index, row) {
      this.$http.post('/home/deleteArea', {id: this.area[index].id})
      .then(res => {
        this.$notify({
          title: '删除地区',
          message: '成功',
          duration: 1000
        })
        this.showAllArea()
      })
    },
    /**
     * 关闭模态框
     */
    closeDialog () {
      this.showAllArea()
      this.isUpdate = false
    },
    /**
     * 查询全部地区
     */
    showAllArea () {
      this.$http.get('/home/getAllArea')
      .then(res => {
        this.area = res.data.allArea
      })
    }
  },
  beforeMount () {
    this.showAllArea()
  }
}
</script>
<style scoped>
</style>