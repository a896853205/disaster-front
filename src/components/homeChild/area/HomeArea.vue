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
        </el-table>
      </FlowItem>
    </FlowColumn>
    <FlowColumn col="4">
      <FlowItem>
        <HomeAreaAdd></HomeAreaAdd>
      </FlowItem>
      <FlowItem>
        这里放增加要求
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
// 地区增加组件
import HomeAreaAdd from '@/components/homeChild/area/HomeAreaAdd.vue'
export default {
  data () {
    return {
      area: []
    }
  },
  components: {
    HomeAreaAdd,
    FlowContainer,
    FlowColumn,
    FlowItem
  },
  computed: {},
  methods: {},
  beforeMount () {
    this.$http.get('/home/getAllArea')
    .then(res => {
      this.area = res.data.allArea
    })
  }
}
</script>
<style scoped>
</style>