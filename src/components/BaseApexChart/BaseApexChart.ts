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
          height: 350
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91]
      }],
      dataLabels: {
        enabled: false
      }
    }
  }
})
