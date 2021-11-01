import { defineComponent } from '@vue/composition-api'

import MenuList from '@/components/Menu/MenuList/MenuList.vue'
import Navbar from '@/components/Navbar/Navbar.vue'
import Loader from '@/components/Loader/Loader.vue'
import { useMenu } from '@/composables/useMenu/useMenu'

export default defineComponent({
  name: 'Menu',
  components: {
    Navbar,
    MenuList,
    Loader
  },
  setup () {
    const links = [
      { name: 'Menu', link: 'menu' },
      { name: 'Book Table', link: 'book-table' }
    ]
    const {
      isLoading,
      isError,
      appetizers,
      desserts,
      mains,
      salads,
      drinks
    } = useMenu()

    return {
      isLoading,
      isError,
      appetizers,
      desserts,
      mains,
      salads,
      drinks,
      links
    }
  }
})
