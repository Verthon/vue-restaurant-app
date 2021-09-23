import Vue, { VNode } from 'vue'
import { mapState, mapActions } from 'vuex'
import EditForm from '@/components/Forms/EditForm/EditForm.vue'
import Button from '@/components/Button/Button.vue'
import { splitDate, formatDate, convertToDate, splitTime } from '@/utils/date'
import * as types from '@/types/store'
import about from '@/assets/landing/brooke-lark-about.jpg'
import { companyMapper } from '@/store/company'
import { bookingMapper } from '@/store/booking'
export default Vue.extend({
  data () {
    return {
      edit: false,
      image: about
    }
  },
  computed: {
    ...mapState({
      company: (state) => state.company,
      booking: (state) => state.booking
    }),
    renderDate: function () {
      const date = this.booking.currentBooking.date
      return splitDate(formatDate(convertToDate(date)))
    },
    renderTime: function () {
      const date = this.booking.currentBooking.date
      return splitTime(formatDate(convertToDate(date)))
    }
  },
  methods: {
    bookingMapper.mapActions({

    }),
    handleSubmit: async function () {
      await this.addBookingToDb(this.booking.currentBooking)
    },
    handleEdit: function (e) {
      e.preventDefault()
      this.edit = true
    }
  },
  components: {
    EditForm,
    Button
  }
})
