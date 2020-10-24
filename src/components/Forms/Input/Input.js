export default {
  props: {
    placeholder: String,
    value: [String, Number]
  },
  methods: {
    updateValue () {
      this.$emit('input', event.target.value)
    }
  }
}
