import { mapState, mapActions } from 'vuex'
import Datepicker from 'vuejs-datepicker'
import * as types from '@/types/store'

import Input from '@/components/Forms/Input/Input.vue'
import Label from '@/components/Forms/Label/Label.vue'
import Button from '@/components/Button/Button.vue'
export default {
  components: {
    Datepicker,
    Input,
    Label,
    Button
  },
  methods: {
    ...mapActions({ addBooking: types.ACTION_BOOKING_ADD }),
    handleSubmit () {
      this.addBooking(this.booking)
      this.$router.push({ path: 'review-booking' })
    },
    getInitialFormValues () {
      return {
        name: '',
        date: '',
        guests: 1,
        email: ''
      }
    }
  },
  computed: mapState({
    booking: 'booking'
  })
}
