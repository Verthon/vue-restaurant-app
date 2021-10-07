import { defineComponent } from '@vue/composition-api'

import MenuList from '@/components/Menu/MenuList/MenuList.vue'
import Navbar from '@/components/Navbar/Navbar.vue'
import { menuMapper } from '@/store/menu'
export default defineComponent({
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
