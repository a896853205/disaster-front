<!-- HomeRescueAdd.vue
物资点情况增加组件
'@/components/homeChild/rescue/HomeRescueAdd.vue' -->
<template>
  <div class="add-container">
    <input v-model="rescue.name" placeholder="物资点名" type="text">
    <input v-model="rescue.longitude" placeholder="经度" type="text">
    <input v-model="rescue.latitude" placeholder="纬度" type="text">
    <input v-model="rescue.open" placeholder="是否可用" type="text">
    <button type="button" @click="save">保存</button>
  </div>
</template>

<script>
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
  components: {},
  computed: {},
  methods: {
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