export default {
  name: 'Loader',
  props: {
    canCancel: {
      type: Boolean,
      default: false
    },
    isFullPage: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}
