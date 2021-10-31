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
    <DatePicker
      v-model="booking.currentBooking.date"
      valueType="format"
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

<<<<<<< HEAD
<script src="./EditForm.ts" lang="ts"></script>
=======
<script src="./EditForm.ts"></script>
>>>>>>> master
