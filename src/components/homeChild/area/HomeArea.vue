<!-- HomeArea.vue
地区情况组件
'@/components/homeChild/area/HomeArea.vue'
 -->
<template>
  <div>
    HomeArea.vue
    <HomeAreaAdd></HomeAreaAdd>
  </div>
</template>

<script>
import HomeAreaAdd from '@/components/homeChild/area/HomeAreaAdd.vue'
export default {
  data () {
    return {
      area: []
    }
  },
  components: {
    HomeAreaAdd
  },
  computed: {},
  methods: {},
  beforeMount () {
    this.$http.get('/home/getAllArea')
    .then(res => {
      this.area = res.data.allArea
    })
  }
}
</script>
<style scoped>
</style>