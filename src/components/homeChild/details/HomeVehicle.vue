<!-- HomeVehicle.vue
车辆详细信息
'@/components/homeChild/details/HomeVehicle.vue'
 -->
<template>
  <div>
    HomeVehicle.vue
  </div>
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
  methods: {},
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