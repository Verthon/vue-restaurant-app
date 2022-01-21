import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'DatePicker',
  props: {
    label: {
      type: String
    },
    placeholder: {
      type: String
    },
    value: {
      type: String
    },
    name: {
      type: String,
      required: true
    },
    validationRules: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    allowFuture: Boolean,
    defaultDate: {
      type: Date,
      default: () => new Date()
    },
    minDate: {
      type: Date,
      default: () => null
    },
    locale: {
      type: String,
      default: 'en'
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
