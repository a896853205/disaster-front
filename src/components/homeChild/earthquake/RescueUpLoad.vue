<!-- RescueUpLoad.vue
装载具体表
'@/components/homeChild/earthquake/RescueUpLoad.vue'
 -->
<template>
  <div>
    <h1>装载具体表</h1>
    <el-table
      :data="upLoadArr"
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column
        prop="vehicle_id"
        label="交通类型id">
      </el-table-column>
      <el-table-column
        prop="vehicle_name"
        label="交通类型">
      </el-table-column>
      <!-- <el-table-column
        prop="area_id"
        label="灾区id">
      </el-table-column> -->
      <el-table-column
        prop="area_name"
        label="灾区名">
      </el-table-column>
      <!-- <el-table-column
        prop="rescue_id"
        label="物资点id">
      </el-table-column> -->
      <el-table-column
        prop="rescue_name"
        label="物资点id">
      </el-table-column>
      <!-- <el-table-column
        prop="good_id"
        label="货物id">
      </el-table-column> -->
      <el-table-column
        prop="good_name"
        label="货物名称">
      </el-table-column>
      <el-table-column
        prop="amount"
        label="数量">
      </el-table-column>
      <el-table-column
        prop="level"
        label="优先级">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {},
  computed: {
    /**
     * 装载具体表
     */
    upLoadArr () {
      return this.$store.state.Earthquake.upLoadArr
    }
  },
  methods: {}
}
</script>
<style scoped>
</style>