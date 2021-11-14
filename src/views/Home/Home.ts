import { defineComponent } from '@vue/composition-api'

import BaseChart from '@/components/BaseChart/BaseChart.vue'
import BaseApexChart from '@/components/BaseApexChart/BaseApexChart.vue'
import Navbar from '@/components/Navbar/Navbar.vue'

export default defineComponent({
  components: {
    Navbar,
    BaseChart,
    BaseApexChart
  },
  data () {
    return {
      links: [{ name: 'Menu', link: 'menu' }, { name: 'Contact', link: 'contact' }, { name: 'Book Table', link: 'book-table' }, { name: 'Admin', link: 'admin' }]
    }
  }
})
