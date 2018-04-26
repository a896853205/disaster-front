<!-- HomeRescue.vue
物资点情况组件
'@/components/homeChild/rescue/HomeRescue.vue' -->
<template>
  <FlowContainer>
    <FlowColumn col="4">
      <FlowItem>
        <FlowItemHead>物资点增加</FlowItemHead>
        <HomeRescueAdd @add-success="showAllRescue"></HomeRescueAdd>
      </FlowItem>
      <FlowItem>
        <FlowItemHead>物资点增加描述</FlowItemHead>
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
        <FlowItemHead>物资点总结数值</FlowItemHead>
        <HomeRescueShow :rescueData = "rescue"></HomeRescueShow>
      </FlowItem>
    </FlowColumn>
    <FlowColumn col="8">
      <FlowItem>
        <FlowItemHead>物资点总览表格</FlowItemHead>
        <el-table
          :data="rescue"
          border
          style="width: 100%"
          :cell-style="cellStyle"
          :header-row-style="headerRowStyle"
          :header-cell-style="headerRowStyle">
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
            label="操作"
            width="120">
            <template slot-scope="scope">
              <i class="iconfont icon-eye" @click="handleShowGoods(scope.$index, scope.row)"></i>
              <i class="iconfont icon-pen" @click="handleEdit(scope.$index, scope.row)"></i>
              <i class="iconfont icon-bin" @click="handleDelete(scope.$index, scope.row)"></i>
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
// flow布局布局头部
import FlowItemHead from '@/components/layOut/flow/FlowItemHead'
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
    FlowItemHead,
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
    this.showAllRescue()
  }
}
</script>
<style scoped>
.iconfont {
  margin-left: 5px;
  margin-right: 5px;
}
.cell-type {
  background: rgb(206, 197, 190);
}
</style>