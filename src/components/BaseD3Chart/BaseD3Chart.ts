/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { defineComponent } from '@vue/composition-api'
import * as d3 from 'd3'

type Data = {
  margin: {
    [x: string]: number;
  };
}

export default defineComponent({
  name: 'BaseD3Chart',
  data () {
    return {
      margin: { top: 30, right: 30, bottom: 70, left: 60 } as Data['margin'],
      width: 400,
      height: 170,
      views: [
        { date: '2021-11-08', value: 0 },
        { date: '2021-11-09', value: 12 },
        { date: '2021-11-10', value: 20 },
        { date: '2021-11-11', value: 1 },
        { date: '2021-11-12', value: 50 },
        { date: '2021-11-13', value: 0 },
        { date: '2021-11-14', value: 5 }
      ]
    }
  },
  computed: {
    viewBox () {
      return `0 0 ${this.width} ${this.height}`
    },
    wrapperTransform () {
      // @ts-ignore
      return `translate(${this.margin.left},${this.margin.top})`
    },
    xAxis () {
      return d3.scaleBand()
        // @ts-ignore
        .range([0, this.width])
        // @ts-ignore
        .domain(this.views.map(d => d.date))
        .padding(0.2)
    },
    yAxis () {
      return d3.scaleLinear()
        // @ts-ignore
        .domain([0, 13000])
        // @ts-ignore
        .range([this.height, 0])
    }
  }
})
