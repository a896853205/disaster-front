<!-- HomeRescueDetailsPie.vue
物资点细节饼形图
'@/components/homeChild/rescue/rescueDetails/HomeRescueDetailsPie.vue'
 -->
<template>
  <div class="pie-chart" ref="pieChart"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  props: ['detailsData'],
  data () {
    return {
    }
  },
  components: {},
  computed: {},
  methods: {
    renderPieChart (rescueGoods, rescueVehicle) {
      // 先处理数据
      let goodsData = []
      let vehicleData = []
      rescueGoods.forEach(goodsItem => {
        goodsData.push({
          name: goodsItem.name,
          value: goodsItem.amount
        })
      })
      rescueVehicle.forEach(vehicleItem => {
        vehicleData.push({
          name: vehicleItem.name,
          value: vehicleItem.amount
        })
      })
      // 然后渲染
      let pieEchart = echarts.init(this.$refs.pieChart)
      pieEchart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [{
          name: '交通工具',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '60%'],
          label: {
            normal: {
              position: 'inner'
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: vehicleData
        }, {
          name: '储存物资',
          type: 'pie',
          radius: ['70%', '85%'],
          label: {
            normal: {
              formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
              backgroundColor: '#eee',
              borderColor: '#aaa',
              borderWidth: 1,
              borderRadius: 4,
              // shadowBlur:3,
              // shadowOffsetX: 2,
              // shadowOffsetY: 2,
              // shadowColor: '#999',
              // padding: [0, 7],
              rich: {
                a: {
                  color: '#999',
                  lineHeight: 22,
                  align: 'center'
                },
                // abg: {
                //     backgroundColor: '#333',
                //     width: '100%',
                //     align: 'right',
                //     height: 22,
                //     borderRadius: [4, 4, 0, 0]
                // },
                hr: {
                  borderColor: '#aaa',
                  width: '100%',
                  borderWidth: 0.5,
                  height: 0
                },
                b: {
                  fontSize: 16,
                  lineHeight: 33
                },
                per: {
                  color: '#eee',
                  backgroundColor: '#334455',
                  padding: [2, 4],
                  borderRadius: 2
                }
              }
            }
          },
          data: goodsData
        }]
      })
    }
  },
  watch: {
    detailsData ({rescueGoods, rescueVehicle}) {
      this.renderPieChart(rescueGoods, rescueVehicle)
    }
  }
}
</script>
<style scoped>
.pie-chart {
  height: 330px; width: 100%;
}
</style>