<!-- HomeRescueAdd.vue
物资点情况增加组件
'@/components/homeChild/rescue/HomeRescueAdd.vue' -->
<template>
  <div class="add-container">
    <InputPack @getValue="getName" class="mar-bom-small" placeholder="物资点名" type="text"></InputPack>
    <InputPack @getValue="getLatitude" class="mar-bom-small" placeholder="经度" type="text"></InputPack>
    <InputPack @getValue="getLongitude" class="mar-bom-small" placeholder="纬度" type="text"></InputPack>
    <InputPack @getValue="getOpen" class="mar-bom-small" placeholder="是否可用" type="text"></InputPack>
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
      rescue: {
        name: '',
        longitude: '',
        latitude: '',
        open: ''
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
      this.rescue.name = value
    },
     getLatitude (value) {
      this.rescue.latitude = value
    },
    getLongitude (value) {
      this.rescue.longitude = value
    },
    getOpen (value) {
      this.rescue.open = value
    },
    save () {
      this.$http.post('/home/addRescue', this.rescue)
      .then(res => {
        this.$notify({
          title: '增加营救点',
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