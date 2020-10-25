import { mapState, mapActions } from 'vuex'
import Datepicker from 'vuejs-datepicker'

import Input from '@/components/Forms/Input/Input.vue'
import Label from '@/components/Forms/Label/Label.vue'
export default {
  components: {
    Datepicker,
    Input,
    Label
  },
  methods: {
    ...mapActions('booking', ['add']),
    handleSubmit () {
      this.$store.dispatch('booking/add', this.booking)
    }
  },
  computed: mapState({
    booking: 'booking'
  })
}
