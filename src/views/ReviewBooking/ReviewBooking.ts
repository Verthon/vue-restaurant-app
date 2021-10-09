import { defineComponent } from '@vue/composition-api'

import EditForm from '@/components/Forms/EditForm/EditForm.vue'
import Button from '@/components/Button/Button.vue'
import { splitDate, formatDate, convertToDate, splitTime } from '@/utils/date'
import { companyMapper } from '@/store/company'
import { bookingMapper } from '@/store/booking'

export default defineComponent({
  data () {
    return {
      edit: false
    }
  },
  computed: {
    ...bookingMapper.mapState({
      booking: (state) => state.currentBooking
    }),
    ...companyMapper.mapState({
      location: (state) => state.location,
      hours: (state) => state.hours
    }),
    renderDate () {
      const date = this.booking.date as any
      return splitDate(formatDate(convertToDate(date)))
    },
    renderTime () {
      const date = this.booking.date as any
      return splitTime(formatDate(convertToDate(date)))
    }
  },
  methods: {
    ...bookingMapper.mapActions({
      saveBooking: 'addBooking'
    }),
    handleSubmit: async function () {
      this.saveBooking(this.booking)
    },
    handleEdit (e: { preventDefault: () => void }) {
      e.preventDefault()
      this.edit = true
    }
  },
  components: {
    EditForm,
    Button
  }
})
