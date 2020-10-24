<template>
  <div>
    <Navbar :links="links" />
    <section id="menu" class="section menu container">
      <h1 class="heading heading--center menu__heading">Menu</h1>
      <div class="row">
        <div class="section__col" v-for="category in menu.menu" :key="category.id">
          <article class="menu__container">
            <h2 class="menu__title">{{ category.id }}</h2>
            <MenuList :category="category" />
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import * as types from '@/types/store'
import MenuList from '@/components/Menu/MenuList.vue'
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
</script>

<style>
</style>
