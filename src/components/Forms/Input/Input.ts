import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    placeholder: String,
    required: {
      type: Boolean,
      default: false
    },
    value: [String, Number]
  },
  methods: {
    updateValue (e: HTMLInputElement) {
      this.$emit('input', e.target.value)
    }
  }
})
