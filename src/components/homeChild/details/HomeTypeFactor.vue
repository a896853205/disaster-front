<!-- HomeTypeFactor.vue
类别系数查看组件
'@/components/homeChild/details/HomeTypeFactor.vue'
-->
<template>
  <div>
    HomeTypeFactor.vue
  </div>
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