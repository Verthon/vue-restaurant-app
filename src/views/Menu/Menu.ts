import { defineComponent } from '@vue/composition-api'

import MenuList from '@/components/Menu/MenuList/MenuList.vue'
import Navbar from '@/components/Navbar/Navbar.vue'
import Loader from '@/components/Loader/Loader.vue'
import { menuMapper } from '@/store/menu'
import { useMenu } from '@/composables/useMenu/useMenu'
import { root, store } from '@/store'

export default defineComponent({
  components: {
    Navbar,
    MenuList,
    Loader
  },
  setup () {
    const ctx = root.context(store)
    const {
      appetizers,
      desserts,
      mains,
      salads,
      drinks
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    } = useMenu(ctx.modules.menu.state.menu)

    return {
      appetizers,
      desserts,
      mains,
      salads,
      drinks
    }
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
    menu: (state) => state.menu,
    loading: (state) => state.status === 'loading'
  }),
  methods: {
    ...menuMapper.mapActions({ setMenu: 'getMenu' }),
    fetchMenu () {
      this.setMenu()
    }
  }
})
