<!-- HomeStrength.vue
烈度查看组件
'@/components/homeChild/details/HomeStrength.vue'
-->
<template>
  <div>
    HomeStrength.vue
  </div>
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