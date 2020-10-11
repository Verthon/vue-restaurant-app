<template>
  <Navbar :links="links"/>
</template>

<script>
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
  components: {
    Navbar
  }
}
</script>

<style>
</style>
