import { defineComponent, toRefs } from '@vue/composition-api'

import EditForm from '@/components/Forms/EditForm/EditForm.vue'
import Button from '@/components/Button/Button.vue'
import { splitDate, formatDate, convertToDate, splitTime } from '@/utils/date'
import { useBookingStore } from '@/store/booking/bookingStore'

export default defineComponent({
  components: {
    EditForm,
    Button
  },
  setup () {
    const bookingStore = useBookingStore()
    const { currentBooking, isLoading, isError } = toRefs(bookingStore)

    return {
      currentBooking,
      isLoading,
      isError
    }
  },
  data () {
    return {
      edit: false
    }
  },
  computed: {
    renderDate () {
      const date = this.currentBooking.date as any
      return splitDate(formatDate(convertToDate(date)))
    },
    renderTime () {
      const date = this.currentBooking.date as any
      return splitTime(formatDate(convertToDate(date)))
    }
  },
  methods: {
    handleEdit (e: { preventDefault: () => void }) {
      e.preventDefault()
      this.edit = true
    }
  }
})
