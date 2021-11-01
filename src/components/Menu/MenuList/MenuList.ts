import MenuItem from '@/components/Menu/MenuItem/MenuItem.vue'
export default {
  props: {
    category: {
      type: Array,
      default: () => []
    }
  },
  components: {
    MenuItem
  }
}
