import Datepicker from 'vuejs-datepicker'
import { defineComponent, ref, toRefs } from '@vue/composition-api'
import { useLocalStorage } from '@vueuse/core'

import Input from '@/components/Forms/Input/Input.vue'
import Label from '@/components/Forms/Label/Label.vue'
import Button from '@/components/Button/Button.vue'
import { useBookingStore } from '@/store/booking/bookingStore'
import router from '@/router'

export default defineComponent({
  components: {
    Datepicker,
    Input,
    Label,
    Button
  },
  setup () {
    const storageBooking = ref({})
    const t = useLocalStorage('booking', storageBooking)
    const bookingStore = useBookingStore()
    const { currentBooking } = toRefs(bookingStore)
    const handleSubmit = () => {
      bookingStore.createBooking(currentBooking.value)
      router.push({ path: 'review-booking' })
    }

    return {
      booking: currentBooking,
      handleSubmit,
      t
    }
  }
})
