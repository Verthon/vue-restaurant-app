import { defineComponent } from '@vue/composition-api'

import BaseChart from '@/components/BaseChart/BaseChart.vue'
import BaseApexChart from '@/components/BaseApexChart/BaseApexChart.vue'
import BaseD3Chart from '@/components/BaseD3Chart/BaseD3Chart.vue'
import Navbar from '@/components/Navbar/Navbar.vue'

export default defineComponent({
  components: {
    Navbar,
    BaseChart,
    BaseApexChart,
    BaseD3Chart
  },
  data () {
    return {
      links: [{ name: 'Menu', link: 'menu' }, { name: 'Contact', link: 'contact' }, { name: 'Book Table', link: 'book-table' }, { name: 'Admin', link: 'admin' }]
    }
  }
})
