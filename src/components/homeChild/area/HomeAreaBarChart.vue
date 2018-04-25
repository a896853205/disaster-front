<!-- HomeAreaBarChart.vue
地区人口数和人口密度的图表
'@/components/homeChild/area/HomeAreaBarChart.vue'
 -->
<template>
  <div class="bar-chart" ref="barChart"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  props: ['areaData'],
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  methods: {
    renderBarChart (areaData) {
      // 处理数据
      let xName = []
      let densityData = []
      let populationData = []
      areaData.forEach(areaItem => {
        // x轴名
        xName.push(areaItem.name)
        // 人口密度数据
        densityData.push(parseInt(areaItem.density))
        // 人口数量数据
        populationData.push(areaItem.population)
      })
      let areaEchart = echarts.init(this.$refs.barChart)
      areaEchart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        legend: {
          data: ['人口数量', '人口密度']
        },
        xAxis: [{
          type: 'category',
          data: xName,
          axisPointer: {
            type: 'shadow'
          }
        }],
        yAxis: [{
          type: 'value',
          name: '人口数量',
          min: 0,
          max: 15000,
          axisLabel: {
            formatter: '{value} 人'
          }
        }, {
          type: 'value',
          name: '人口密度',
          min: 0,
          max: 500,
          interval: 200,
          axisLabel: {
            formatter: '{value}'
          }
        }],
        series: [{
          name: '人口数量',
          type: 'bar',
          data: populationData
        }, {
          name: '人口密度',
          yAxisIndex: 1,
          type: 'bar',
          data: densityData
        }]
      })
    }
  },
  watch: {
    areaData (areaData) {
      this.renderBarChart(areaData)
    }
  }
}
</script>
<style scoped>
.bar-chart {
  height: 330px; width: 100%;
}
</style>