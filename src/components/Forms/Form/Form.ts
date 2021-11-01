import Datepicker from 'vuejs-datepicker'
import { defineComponent } from '@vue/composition-api'

import Input from '@/components/Forms/Input/Input.vue'
import Label from '@/components/Forms/Label/Label.vue'
import Button from '@/components/Button/Button.vue'
import { bookingMapper } from '@/store/booking'

export default defineComponent({
  components: {
    Datepicker,
    Input,
    Label,
    Button
  },
  computed: bookingMapper.mapState({
    booking: (state) => state.currentBooking,
    name: (state) => state.currentBooking.name,
    email: (state) => state.currentBooking.email,
    date: (state) => state.currentBooking.date,
    guests: (state) => state.currentBooking.guests
  }),
  methods: {
    ...bookingMapper.mapActions({
      addBooking: 'addBooking'
    }),
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
  }
})
