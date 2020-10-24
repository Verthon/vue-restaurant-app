<template>
  <div>
    <Navbar :links="links" />
    <h1>Admin</h1>
    <Button @click="handleLogout()">Logout</Button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Navbar from '@/components/Navbar/Navbar.vue'
import Button from '@/components/Button/Button.vue'
import * as types from '@/types/store'
export default {
  links: [
    { name: 'Menu', link: 'menu' },
    { name: 'Book Table', link: 'book-table' }
  ],
  computed: {
    ...mapState({
      auth: (state) => state.auth
    })
  },
  methods: {
    ...mapActions({ doLogout: types.ACTION_AUTH_LOGOUT }),
    async handleLogout () {
      await this.doLogout()
      this.$router.push({ path: '/' })
    }
  },
  components: {
    Navbar,
    Button
  }
}
</script>

<style>
</style>
