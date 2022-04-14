import DatePicker from 'vue2-datepicker'
import { defineComponent, toRefs } from '@vue/composition-api'

import Input from '@/components/Forms/Input/Input.vue'
import Label from '@/components/Forms/Label/Label.vue'
import { useBookingStore } from '@/store/booking/bookingStore'

export default defineComponent({
  components: {
    DatePicker,
    Input,
    Label
  },
  setup () {
    const bookingStore = useBookingStore()
    const { currentBooking } = toRefs(bookingStore)
    const handleSubmit = () => {
      bookingStore.createBooking(currentBooking.value)
    }

    return {
      booking: currentBooking,
      handleSubmit
    }
  }
})
