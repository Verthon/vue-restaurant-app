import Vue from 'vue'
import EditForm from '@/components/Forms/EditForm/EditForm.vue'
import Button from '@/components/Button/Button.vue'
import { splitDate, formatDate, convertToDate, splitTime } from '@/utils/date'
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
    ...bookingMapper.mapState({
      currentBooking: (state) => state.currentBooking
    }),
    ...companyMapper.mapState({
      location: (state) => state.location,
      hours: (state) => state.hours
    }),
    renderDate: function () {
      const date = this.currentBooking.date
      return splitDate(formatDate(convertToDate(date)))
    },
    renderTime: function () {
      const date = this.currentBooking.date
      return splitTime(formatDate(convertToDate(date)))
    }
  },
  methods: {
    ...bookingMapper.mapActions({
      saveBooking: 'addBooking'
    }),
    handleSubmit: async function () {
      this.saveBooking(this.currentBooking)
    },
    handleEdit: function (e: { preventDefault: () => void }) {
      e.preventDefault()
      this.edit = true
    }
  },
  components: {
    EditForm,
    Button
  }
})
