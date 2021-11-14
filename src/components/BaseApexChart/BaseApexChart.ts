import { defineComponent } from '@vue/composition-api'
import chart from 'vue-apexcharts'

export default defineComponent({
  name: 'BaseApexChart',
  components: { apexchart: chart },
  data () {
    return {
      chartOptions: {
        chart: {
          id: 'booking-chart',
          type: 'bar',
          background: '#fff',
          height: 350,
          toolbar: {
            show: true,
            tools: {
              download: false
            }
          }
        },
        states: {
          hover: {
            filter: {
              type: 'none'
            }
          }
        },
        tooltip: {
          enabled: false
        },
        colors: ['#2BB574'],
        grid: {
          padding: {
            top: 0,
            right: 20,
            bottom: 0,
            left: 20
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Nov 8', 'Nov 9', 'Nov 10', 'Nov 11', 'Nov 12', 'Nov 13', 'Nov 14'],
          labels: {
            show: true
          }
        }
      },
      series: [{
        name: 'series-1',
        data: [6, 8, 0, 10, 3, 15, 0]
      }]
    }
  }
})
