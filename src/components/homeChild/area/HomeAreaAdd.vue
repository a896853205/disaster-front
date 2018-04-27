<!-- HomeAreaAdd.vue
灾区增加组件
'@/components/homeChild/area/HomeAreaAdd.vue'
 -->
<template>
  <div class="add-container">
    <InputPack @getValue="getName" type="text" class="mar-bom-small" placeholder="地点名"></InputPack>
    <InputPack @getValue="getPopulation" type="text" class="mar-bom-small" placeholder="人口数"></InputPack>
    <InputPack @getValue="getDensity" type="text" class="mar-bom-small" placeholder="人口密度"></InputPack>
    <InputPack @getValue="getLatitude" type="text" class="mar-bom-small" placeholder="经度"></InputPack>
    <InputPack @getValue="getLongitude" type="text" class="mar-bom-small" placeholder="纬度"></InputPack>
    <ButtonPack @click.native="save">
      保存
    </ButtonPack>
  </div>
</template>

<script>
// input组件
import InputPack from '@/components/form/InputPack'
// button组件
import ButtonPack from '@/components/form/ButtonPack'
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
  components: {
    InputPack,
    ButtonPack
  },
  computed: {},
  methods: {
    getName (value) {
      this.area.name = value
    },
    getPopulation (value) {
      this.area.population = value
    },
    getDensity (value) {
      this.area.density = value
    },
    getLatitude (value) {
      this.area.latitude = value
    },
    getLongitude (value) {
      this.area.longitude = value
    },
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