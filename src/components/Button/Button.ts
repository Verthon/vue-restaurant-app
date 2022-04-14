import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    outlined: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    nativeType: {
      type: String,
      default: 'submit'
    },
    size: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      defaut: false
    }
  },
  computed: {
    currentType (): string {
      return `is-${this.type}`
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
})
