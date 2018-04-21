<!-- HomeRescue.vue
物资点情况组件
'@/components/homeChild/rescue/HomeRescue.vue' -->
<template>
  <FlowContainer>
    <FlowColumn col="8">
      <FlowItem>
        <el-table
          :data="rescue"
          height="680"
          border
          style="width: 100%">
          <el-table-column
            prop="name"
            label="地点名">
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
        </el-table>
      </FlowItem>
    </FlowColumn>
    <FlowColumn col="4">
      <FlowItem>
        <HomeRescueAdd></HomeRescueAdd>
      </FlowItem>
      <FlowItem>
        增加描述
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
// 物资点情况增加组件
import HomeRescueAdd from '@/components/homeChild/rescue/HomeRescueAdd.vue'
export default {
  data () {
    return {
      rescue: []
    }
  },
  components: {
    HomeRescueAdd,
    FlowContainer,
    FlowColumn,
    FlowItem
  },
  computed: {},
  methods: {
    isOpen (row, column, cellValue) {
      if (cellValue === '1') {
        return '可使用'
      } else {
        return '不可使用'
      }
    }
  },
  beforeMount () {
    this.$http.get('/home/getAllRescue')
    .then(res => {
      this.rescue = res.data.allRescue
    })
  }
}
</script>
<style scoped>
</style>