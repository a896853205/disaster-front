<!-- HomeStrength.vue
烈度查看组件
'@/components/homeChild/details/HomeStrength.vue'
-->
<template>
  <el-table
    :data="strength"
    border
    style="width: 100%"
    :cell-style="cellStyle"
    :header-row-style="headerRowStyle"
    :header-cell-style="headerRowStyle">
    <el-table-column
      prop="level"
      label="等级">
    </el-table-column>
    <el-table-column
      prop="coeffcient"
      label="系数">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      strength: []
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
    this.$http.get('/home/getAllStrength')
    .then(res => {
      this.strength = res.data.allStrength
    })
  }
}
</script>
<style scoped>
</style>