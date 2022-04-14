import { defineComponent, toRefs } from '@vue/composition-api'

import Navbar from '@/components/Navbar/Navbar.vue'
import Button from '@/components/Button/Button.vue'
import { useAuthStore } from '@/store/auth/authStore'
import router from '@/router'

export default defineComponent({
  components: {
    Navbar,
    Button
  },
  setup () {
    const authStore = useAuthStore()
    const { isLoading, isError } = toRefs(authStore)

    const handleLogout = () => {
      authStore.logout()
      router.push({ path: '/' })
    }

    return {
      isLoading,
      isError,
      handleLogout
    }
  },
  links: [
    { name: 'Menu', link: 'menu' },
    { name: 'Book Table', link: 'book-table' }
  ]
})
