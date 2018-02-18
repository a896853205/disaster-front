<template>
  <div class="index">
    <el-button @click.native="next" 
               type="danger" 
               plain>
      开启地质灾害平台
    </el-button>
  </div>
</template>
<script>
export default {
  components: {},
  name: 'Index',
  data () {
    return {
    }
  },
  methods: {
    next () {
      location.href = '/#/AreaSelect'
    }
  }
}
</script>

<style scoped>
</style>
