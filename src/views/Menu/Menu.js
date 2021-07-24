import { mapState, mapActions } from 'vuex'

import * as types from '@/types/store'
import MenuList from '@/components/Menu/MenuList/MenuList.vue'
import Navbar from '@/components/Navbar/Navbar.vue'
export default {
  data () {
    return {
      links: [
        { name: 'Menu', link: 'menu' },
        { name: 'Book Table', link: 'book-table' }
      ]
    }
  },
  computed: mapState(['menu']),
  methods: {
    ...mapActions({ setMenu: types.ACTION_MENU_SET }),
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
}
