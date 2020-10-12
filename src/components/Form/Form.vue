<template>
  <form @submit.prevent="handleSubmit">
    <Label for="name">{{$t('CORE.NAME')}}</Label>
    <Input
      :value="booking.name"
      @input="booking.name = $event"
      placeholder="Your name"
      name="name"
    />
    <Label for="email">{{$t('CORE.EMAIL')}}</Label>
    <Input :value="booking.email" @input="booking.email = $event" placeholder="Your email" name="email" />
    <Label for="date">{{$t('CORE.DATE')}}</Label>
    <datepicker
      v-model="booking.date"
      placeholder="Select a date"
      name="date"
    />
    <Label for="guests">{{$t('CORE.GUESTS')}}</Label>
    <Input
      type="number"
      :value="booking.guests"
      @input="booking.guests = $event"
      placeholder="Number of guests"
      name="guests"
    />
    <Button type="submit" variant="dark" size="large">{{$t('CORE.SUBMIT')}}</Button>
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Datepicker from 'vuejs-datepicker'

import Input from '@/components/Form/Input'
import Label from '@/components/Form/Label'
import Button from '@/components/Button'
export default {
  components: {
    Datepicker,
    Input,
    Label,
    Button
  },
  data () {
    return {
      booking: this.getInitialFormValues()
    }
  },
  methods: {
    ...mapActions('booking', ['add']),
    handleSubmit () {
      this.$store.dispatch('booking/add', this.booking)
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
</script>

<style></style>
