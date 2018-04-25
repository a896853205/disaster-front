<!-- HomeRescueShow.vue
物资点展示细则
'@/components/homeChild/rescue/HomeRescueShow.vue' -->
<template>
  <div class="show-detail-container">
    <div class="rescue-outline">
      <span>物资点数</span>
      <span>
        {{ rescueData.length }}个
      </span>
    </div>
    <div class="rescue-outline">
      <span>可使用数</span>
      <span>
        {{ rescueData.length }}个
      </span>
    </div>
    <div class="rescue-outline">
      <span>不可使用数</span>
      <span>
        0个
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rescueData'],
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  methods: {}
}
</script>
<style scoped>
.rescue-outline {
  width: 100%; height: 40px;
  padding-left: 20px;
  margin-bottom: 10px;
  line-height: 40px;
  background: #F5F5F6;
  font-size: 12px;
  color: #666;
}
.rescue-outline:last-child {
  margin-bottom: 0;
}
.show-detail-container {
  padding: 20px;
}
</style>