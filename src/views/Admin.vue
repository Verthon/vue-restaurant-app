<template>
  <div>
    <Navbar :links="links" />
    <h1>Admin</h1>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar'
export default {
  links: [
    { name: 'Menu', link: 'menu' },
    { name: 'Book Table', link: 'book-table' }
  ],
  components: {
    Navbar
  }
}
</script>

<style>
</style>
