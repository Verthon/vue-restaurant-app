import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  data () {
    return {
      width: 600,
      active: false
    }
  },
  props: {
    links: Array
  },
  methods: {
    handleNavbarToggle () {
      this.active = !this.active
    }
  },
})
