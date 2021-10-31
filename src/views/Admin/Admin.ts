import { defineComponent } from '@vue/composition-api'

import Navbar from '@/components/Navbar/Navbar.vue'
import Button from '@/components/Button/Button.vue'
import { authMapper } from '@/store/auth'

export default defineComponent({
  links: [
    { name: 'Menu', link: 'menu' },
    { name: 'Book Table', link: 'book-table' }
  ],
  methods: {
    ...authMapper.mapActions({
      doLogout: 'logout'
    }),
    async handleLogout () {
      await this.doLogout()
      this.$router.push({ path: '/' })
    }
  },
  components: {
    Navbar,
    Button
  }
})
