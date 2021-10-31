import { defineComponent } from '@vue/composition-api'

import Navbar from '@/components/Navbar/Navbar.vue'
import Input from '@/components/Forms/Input/Input.vue'
import Label from '@/components/Forms/Label/Label.vue'
import Button from '@/components/Button/Button.vue'
import { authMapper } from '@/store/auth'

export default defineComponent({
  data () {
    return {
      email: '',
      password: '',
      error: '',
      links: [
        { name: 'Menu', link: 'menu' },
        { name: 'Book Table', link: 'book-table' }
      ]
    }
  },
  computed: {
    ...authMapper.mapState({
      isAuthorized: (state) => state.isAuthorized
    })
  },
  methods: {
    ...authMapper.mapActions({
      doLogin: 'login',
      doLogout: 'logout'
    }),
    async handleSubmit () {
      const credentials = {
        email: this.email,
        password: this.password
      }
      await this.doLogin(credentials)
      this.$router.push({ path: 'admin' })
    },
    async logout () {
      await this.doLogout()
    }
  },
  components: {
    Navbar,
    Input,
    Label,
    Button
  }
})
