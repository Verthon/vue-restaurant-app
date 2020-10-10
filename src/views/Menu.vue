<template>
  <div>
    <Navbar links="links" />
    <section id="menu" class="section menu container">
      <h1 class="heading heading--center menu__heading">Menu</h1>
      <div class="row">
        <div class="section__col" v-for="category in menu.menu" :key="category.id">
          <article class="menu__container">
            <h2 class="menu__title">{{ category.id }}</h2>
            <MenuList category="{category}" />
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import MenuList from '@/components/Menu/MenuList'
import Navbar from '@/components/Navbar/Navbar'
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
    fetchMenu () {
      this.$store.dispatch('menu/fetchMenu')
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
