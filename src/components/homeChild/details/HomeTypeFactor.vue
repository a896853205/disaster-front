<!-- HomeTypeFactor.vue
类别系数查看组件
'@/components/homeChild/details/HomeTypeFactor.vue'
-->
<template>
  <el-table
    :data="typeFactor"
    border
    style="width: 100%">
    <el-table-column
      prop="name"
      label="类型名">
    </el-table-column>
    <el-table-column
      prop="area_id"
      label="地区适用">
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
      typeFactor: []
    }
  },
  components: {},
  computed: {},
  methods: {},
  beforeMount () {
    this.$http.get('/home/getAllTypeFactor')
    .then(res => {
      this.typeFactor = res.data.allTypeFactor
    })
  }
}
</script>
<style scoped>
</style>