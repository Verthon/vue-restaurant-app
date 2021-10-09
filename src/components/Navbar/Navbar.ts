import { defineComponent } from '@vue/composition-api'
import NavButton from './NavButton/NavButton.vue'
import NavList from './NavList/NavList.vue'

export default defineComponent({
  data () {
    return {
      firstRender: true,
      active: false
    }
  },
  props: {
    links: Array
  },
  methods: {
    handleNavbarToggle () {
      this.$emit('toggleNavbar')
      this.active = !this.active
    }
  },
  components: {
    NavButton,
    NavList
  }
})
