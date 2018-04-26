<!-- HomeGoodsRadar.vue
物资雷达图
'@/components/homeChild/goods/HomeGoodsRadar.vue' -->
<template>
  <div class="radar-chart" ref="radarChart"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  props: ['goodsData'],
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  methods: {
    renderRadarChart (goodsData) {
      // 处理数据
      let xName = []
      let goodsWeight = []
      goodsData.forEach(goodsItem => {
        // x轴名
        xName.push({
          name: goodsItem.name,
          max: 12
        })
        goodsWeight.push(goodsItem.weight)
      })
      let areaEchart = echarts.init(this.$refs.radarChart)
      areaEchart.setOption({
        tooltip: {},
        legend: {
          data: ['货物重量']
        },
        radar: {
          shape: 'circle',
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: xName
        },
        series: [{
          name: '物资重量',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [{
            value: goodsWeight,
            name: '物资重量'
          }]
        }]
      })
    }
  },
  watch: {
    goodsData (goodsData) {
      this.renderRadarChart(goodsData)
    }
  }
}
</script>
<style scoped>
.radar-chart {
  height: 330px; width: 100%;
}
</style>