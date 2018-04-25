<!-- HomeRescue.vue
物资点情况组件
'@/components/homeChild/rescue/HomeRescue.vue' -->
<template>
  <FlowContainer>
    <FlowColumn col="4">
      <FlowItem>
        <HomeRescueAdd @add-success="showAllRescue"></HomeRescueAdd>
      </FlowItem>
      <FlowItem>
        <ul class="describe-ul">
          <li>
            <strong>[物资点名]</strong>
            <span>预演物资点的地点名</span>
          </li>
          <li>
            <strong>[经度]</strong>
            <span>预演灾区的所在经度</span>
          </li>
          <li>
            <strong>[纬度]</strong>
            <span>预演灾区的所在纬度</span>
          </li>
          <li>
            <strong>[是否可用]</strong>
            <span>预演物资点在发生灾害时是否可用</span>
          </li>
        </ul>
      </FlowItem>
      <FlowItem>
        <HomeRescueShow :rescueData = "rescue"></HomeRescueShow>
      </FlowItem>
      
    </FlowColumn>
    <FlowColumn col="8">
      <FlowItem>
        <el-table
          :data="rescue"
          height="680"
          border
          style="width: 100%">
          <el-table-column
            prop="name"
            label="物资点名">
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
            prop="switch"
            label="是否可用"
            :formatter="isOpen">
          </el-table-column>
          <el-table-column
            label="查看当前细节">
            <template slot-scope="scope">
               <el-button
                size="mini"
                @click="handleShowGoods(scope.$index, scope.row)"
                width="100">
                  查看
                </el-button>
            </template>
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
    <HomeRescueUpdate @close-dialog="closeDialog"
                     :updateRescue = updateRescue
                     :isUpdate = isUpdate></HomeRescueUpdate>
  </FlowContainer>
</template>

<script>
// 营救点修改情况组件
import HomeRescueUpdate from '@/components/homeChild/rescue/HomeRescueUpdate.vue'
// flow布局大框架
import FlowContainer from '@/components/layOut/flow/FlowContainer'
// flow布局每条列
import FlowColumn from '@/components/layOut/flow/FlowColumn'
// flow布局每条列
import FlowItem from '@/components/layOut/flow/FlowItem'
// 物资点情况增加组件
import HomeRescueAdd from '@/components/homeChild/rescue/HomeRescueAdd.vue'
// 物资点数目组件
import HomeRescueShow from '@/components/homeChild/rescue/HomeRescueShow.vue'
export default {
  data () {
    return {
      rescue: [],
      updateRescue: {},
      isUpdate: false
    }
  },
  components: {
    HomeRescueAdd,
    FlowContainer,
    FlowColumn,
    FlowItem,
    HomeRescueUpdate,
    HomeRescueShow
  },
  computed: {},
  methods: {
    /**
     * 营救点是否可用回调显示函数
     */
    isOpen (row, column, cellValue) {
      if (cellValue === '1') {
        return '可使用'
      } else {
        return '不可使用'
      }
    },
    handleShowGoods (index, row) {
      location.href = '/#/home/rescueDetails/' + this.rescue[index].id
    },
    /**
     * 打开编辑模态框
     */
    handleEdit (index, row) {
      this.updateRescue = this.rescue[index]
      this.isUpdate = true
    },
    /**
     * 关闭模态框
     */
    closeDialog () {
      this.showAllRescue()
      this.isUpdate = false
    },
    /**
     * 查询全部营救点
     */
    showAllRescue () {
      this.$http.get('/home/getAllRescue')
      .then(res => {
        this.rescue = res.data.allRescue
      })
    },
    handleDelete (index, row) {
      this.$http.post('/home/deleteRescue', {id: this.rescue[index].id})
      .then(res => {
        this.$notify({
          title: '删除营救点',
          message: '成功',
          duration: 1000
        })
        this.showAllRescue()
      })
    }
  },
  beforeMount () {
    this.showAllRescue()
  }
}
</script>
<style scoped>
</style>