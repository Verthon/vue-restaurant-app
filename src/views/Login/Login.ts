import Vue from 'vue'

import Navbar from '@/components/Navbar/Navbar.vue'
import Input from '@/components/Forms/Input/Input.vue'
import Label from '@/components/Forms/Label/Label.vue'
import Button from '@/components/Button/Button.vue'
import img from '@/assets/landing/brooke-lark-book-table.jpg'
import { authMapper } from '@/store/auth'

// Any properties that are set in the `data()` return object should go here.
interface Data {
  loginImg: string;
      email: string;
      password: string;
      error: string;
      links: [
        { name: 'Menu'; link: 'menu' },
        { name: 'Book Table'; link: 'book-table' }
      ];
}

// Any methods that are set in the "methods()" should go here.
interface Methods {}

// Any properties that are set in the "computed()" should go here.
interface Computed {}

// Any component props should go here.
interface Props {}

export default Vue.extend({
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
    ...authMapper.mapState({
      isAuthorized: (state) => state.isAuthorized
    })
  },
  methods: {
    ...authMapper.mapActions({
      doLogin: 'login'
    }),
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
})
