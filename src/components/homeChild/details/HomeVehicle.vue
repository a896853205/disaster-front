<!-- HomeVehicle.vue
车辆详细信息
'@/components/homeChild/details/HomeVehicle.vue'
 -->
<template>
  <el-table
    :data="vehicle"
    border
    style="width: 100%"
    :cell-style="cellStyle"
    :header-row-style="headerRowStyle"
    :header-cell-style="headerRowStyle">
    <el-table-column
      prop="name"
      label="交通类型名">
    </el-table-column>
    <el-table-column
      prop="load"
      label="装载量">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      vehicle: []
    }
  },
  components: {},
  computed: {},
  methods: {
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
    this.$http.get('/home/getAllVehicle')
    .then(res => {
      this.vehicle = res.data.allVehicle
    })
  }
}
</script>
<style scoped>
</style>