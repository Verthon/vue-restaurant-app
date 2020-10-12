<template>
  <form @submit.prevent="handleSubmit">
    <Label for="name">Name</Label>
    <Input
      :value="booking.currentBooking.name"
      @input="booking.currentBooking.name = $event"
      placeholder="Your name"
      name="name"
    />
    <Label for="email">Email</Label>
    <Input :value="booking.currentBooking.email" @input="booking.currentBooking.email = $event" placeholder="Your email" name="email" />
    <Label for="date">Date</Label>
    <datepicker
      v-model="booking.currentBooking.date"
      placeholder="Select a date"
      name="date"
    />
    <Label for="guests">Guests</Label>
    <Input
      type="number"
      :value="booking.currentBooking.guests"
      @input="booking.currentBooking.guests = $event"
      placeholder="Number of guests"
      name="guests"
    />
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Datepicker from 'vuejs-datepicker'

import Input from '@/components/Form/Input'
import Label from '@/components/Form/Label'
export default {
  components: {
    Datepicker,
    Input,
    Label
  },
  methods: {
    ...mapActions('booking', ['add']),
    handleSubmit () {
      this.$store.dispatch('booking/add', this.booking)
    }
  },
  computed: mapState({
    booking: 'booking'
  })
}
</script>

<style></style>
