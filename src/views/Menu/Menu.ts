import { defineComponent } from '@vue/composition-api'

import MenuList from '@/components/Menu/MenuList/MenuList.vue'
import Navbar from '@/components/Navbar/Navbar.vue'
import { menuMapper } from '@/store/menu'
export default defineComponent({
  components: {
    Navbar,
    MenuList
  },
  data () {
    return {
      links: [
        { name: 'Menu', link: 'menu' },
        { name: 'Book Table', link: 'book-table' }
      ]
    }
  },
  created () {
    this.fetchMenu()
  },
  computed: menuMapper.mapState({
    menu: (state) => state.menu
  }),
  methods: {
    ...menuMapper.mapActions({ setMenu: 'getMenu' }),
    fetchMenu () {
      this.setMenu()
    }
  }
})
