import Vue from 'vue'

import MenuList from '@/components/Menu/MenuList/MenuList.vue'
import Navbar from '@/components/Navbar/Navbar.vue'
import { menuMapper } from '@/store/menu'
export default Vue.extend({
  data () {
    return {
      links: [
        { name: 'Menu', link: 'menu' },
        { name: 'Book Table', link: 'book-table' }
      ]
    }
  },
  computed: menuMapper.mapState(['menu']),
  methods: {
    ...menuMapper.mapActions({ setMenu: 'getMenu' }),
    fetchMenu () {
      this.setMenu()
    }
  },
  created () {
    this.fetchMenu()
  },
  components: {
    Navbar,
    MenuList
  }
})
