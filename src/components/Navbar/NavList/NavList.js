import NavItem from '@/components/Navbar/NavItem/NavItem.vue'

export default {
  props: {
    isNavActive: Boolean,
    withDashboard: Boolean,
    links: Array
  },
  components: {
    NavItem
  }
}
