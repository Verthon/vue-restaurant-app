import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  // data () {
  //   return {
  //     active: false,
  //     items: null
  //   }
  // },
  data: () => ({
    chartdata: {
      labels: ['2021-11-08', '2021-11-09', '2021-11-10', '2021-11-11', '2021-11-12', '2021-11-13', '2021-11-14'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#2BB574',
          data: [0, 12, 20, 1, 50, 0, 5]
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      layout: {
        padding: 20
      },
      legend: {
        display: false
      },
      classes: ['base-chart']
    }
  }),
  created () {
    const data = {
      items: [
        { date: '2021-11-08', value: 0 },
        { date: '2021-11-09', value: 12 },
        { date: '2021-11-10', value: 20 },
        { date: '2021-11-11', value: 1 },
        { date: '2021-11-12', value: 50 },
        { date: '2021-11-13', value: 0 },
        { date: '2021-11-14', value: 5 }
      ]
    }

    this.fillData(data)
  },
  mounted () {
    this.renderChart(this.chartdata, {})
  },
  methods: {
    fillData (data) {
      this.items = data.items.map(item => {
        return {
          labels: item.date,
          datasets: [
            {
              label: item.date,
              backgroundColor: '#f87979',
              data: [item.value]
            }
          ]
        }
      })
    }
  }
}
