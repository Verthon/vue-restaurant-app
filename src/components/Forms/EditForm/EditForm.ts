import { mapState, mapActions } from 'vuex'
import DatePicker from 'vue2-datepicker'
import { defineComponent } from '@vue/composition-api'

import Input from '@/components/Forms/Input/Input.vue'
import Label from '@/components/Forms/Label/Label.vue'
import store from '@/store'
export default defineComponent({
  components: {
    DatePicker,
    Input,
    Label
  },
  methods: {
    ...mapActions('booking', ['add']),
    handleSubmit () {
      store.dispatch('booking', this.booking)
    }
  },
  computed: mapState({
    booking: 'booking'
  })
})
