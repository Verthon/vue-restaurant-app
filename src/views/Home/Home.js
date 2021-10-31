import Navbar from '@/components/Navbar/Navbar.vue'
export default {
  data () {
    return {
      links: [{ name: 'Menu', link: 'menu' }, { name: 'Contact', link: 'contact' }, { name: 'Book Table', link: 'book-table' }, { name: 'Admin', link: 'admin' }]
    }
  },
  components: {
    Navbar
  }
}
