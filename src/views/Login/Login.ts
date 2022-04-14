import { defineComponent, ref, toRefs } from '@vue/composition-api'

import Navbar from '@/components/Navbar/Navbar.vue'
import Input from '@/components/Forms/Input/Input.vue'
import Label from '@/components/Forms/Label/Label.vue'
import Button from '@/components/Button/Button.vue'
import { useAuthStore } from '@/store/auth/authStore'
import router from '@/router'

export default defineComponent({
  name: 'Login',
  components: {
    Navbar,
    Input,
    Label,
    Button
  },
  setup () {
    const authStore = useAuthStore()
    const { isLoading, isError } = toRefs(authStore)
    const email = ref('')
    const password = ref('')

    const handleLogin = () => {
      authStore.login({ email: email.value, password: password.value })
      router.push({ path: 'admin' })
    }

    return {
      isLoading,
      isError,
      email,
      password,
      handleLogin
    }
  },
  data () {
    return {
      error: '',
      links: [
        { name: 'Menu', link: 'menu' },
        { name: 'Book Table', link: 'book-table' }
      ]
    }
  }
})
