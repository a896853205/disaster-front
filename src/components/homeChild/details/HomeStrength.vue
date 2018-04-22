<!-- HomeStrength.vue
烈度查看组件
'@/components/homeChild/details/HomeStrength.vue'
-->
<template>
  <el-table
    :data="strength"
    border
    style="width: 100%">
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
  methods: {},
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