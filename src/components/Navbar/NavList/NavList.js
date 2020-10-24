import NavItem from '@/components/Navbar/NavItem/NavItem'

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
