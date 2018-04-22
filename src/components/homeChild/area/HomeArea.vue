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
          height="680"
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
    </FlowColumn>
    <FlowColumn col="4">
      <FlowItem>
        <HomeAreaAdd @add-success="showAllArea"></HomeAreaAdd>
      </FlowItem>
      <FlowItem>
        这里放增加要求
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
    HomeAreaUpdate
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