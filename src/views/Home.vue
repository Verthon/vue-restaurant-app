<template>
  <div class="container">
    <Navbar :links="links"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar'
export default {
  data () {
    return {
      links: [{ name: 'Menu', link: 'menu' }, { name: 'Contact', link: 'contact' }]
    }
  },
  components: {
    Navbar
  }
}
</script>
