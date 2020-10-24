import { mapActions, mapState } from 'vuex'
import Navbar from '@/components/Navbar/Navbar.vue'
import Input from '@/components/Forms/Input/Input.vue'
import Label from '@/components/Forms/Label/Label.vue'
import Button from '@/components/Button/Button.vue'
import img from '@/assets/landing/brooke-lark-book-table.jpg'
import * as types from '@/types/store'
export default {
  data: function () {
    return {
      loginImg: img,
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
    ...mapState({
      auth: (state) => state.auth
    })
  },
  methods: {
    ...mapActions({ doLogin: types.ACTION_AUTH_LOGIN }),
    handleSubmit: async function () {
      const credentials = {
        email: this.email,
        password: this.password
      }
      await this.doLogin(credentials)
      this.$router.push({ path: 'admin' })
    }
  },
  components: {
    Navbar,
    Input,
    Label,
    Button
  }
}
