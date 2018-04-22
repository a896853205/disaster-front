<!-- HomeAreaAdd.vue
灾区增加组件
'@/components/homeChild/area/HomeAreaAdd.vue'
 -->
<template>
  <div>
    HomeAreaAdd.vue
    <input v-model="area.name" type="text" placeholder="地点名">
    <input v-model="area.population" type="text" placeholder="人口数">
    <input v-model="area.density" type="text" placeholder="人口密度">
    <input v-model="area.longitude" type="text" placeholder="经度">
    <input v-model="area.latitude" type="text" placeholder="纬度">
    <button type="button" @click="save">
      保存
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      area: {
        name: '',
        population: '',
        density: '',
        longitude: '',
        latitude: ''
      }
    }
  },
  components: {},
  computed: {},
  methods: {
    save () {
      this.$http.post('/home/addArea', this.area)
      .then(res => {
        this.$notify({
          title: '增加地区',
          message: '成功',
          duration: 1000
        })
        this.$emit('add-success')
      })
    }
  }
}
</script>
<style scoped>
</style>