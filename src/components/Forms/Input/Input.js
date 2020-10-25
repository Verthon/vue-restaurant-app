export default {
  props: {
    placeholder: String,
    required: {
      type: Boolean,
      default: false
    },
    value: [String, Number]
  },
  methods: {
    updateValue (e) {
      this.$emit('input', e.target.value)
    }
  }
}
