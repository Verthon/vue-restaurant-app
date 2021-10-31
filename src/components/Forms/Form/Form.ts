<<<<<<< HEAD:src/components/Forms/Form/Form.ts
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import DatePicker from 'vue2-datepicker'
import * as types from '@/types/store'
=======
import Datepicker from 'vuejs-datepicker'
import { defineComponent } from '@vue/composition-api'
>>>>>>> master:src/components/Forms/Form/Form.js

import Input from '@/components/Forms/Input/Input.vue'
import Label from '@/components/Forms/Label/Label.vue'
import Button from '@/components/Button/Button.vue'
<<<<<<< HEAD:src/components/Forms/Form/Form.ts
export default Vue.extend({
=======
import { bookingMapper } from '@/store/booking'

export default defineComponent({
>>>>>>> master:src/components/Forms/Form/Form.js
  components: {
    DatePicker,
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
<<<<<<< HEAD:src/components/Forms/Form/Form.ts
  },
  computed: mapState({
    booking: 'booking'
  })
=======
  }
>>>>>>> master:src/components/Forms/Form/Form.js
})
