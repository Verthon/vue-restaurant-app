<template>
  <form @submit.prevent="handleSubmit" id="booking-form">
    <Label for="name">{{ $t("CORE.NAME") }}</Label>
    <Input
      v-model="booking.name"
      placeholder="Your name"
      name="name"
      required
    />
    <Label for="email">{{ $t("CORE.EMAIL") }}</Label>
    <Input v-model="booking.email" placeholder="Your email" name="email" required />
    <Label for="date">{{ $t("CORE.DATE") }}</Label>
    <datepicker
      v-model="booking.date"
      placeholder="Select a date"
      name="date"
      required
    />
    <Label for="guests">{{ $t("CORE.GUESTS") }}</Label>
    <Input
      type="number"
      v-model="booking.guests"
      placeholder="Number of guests"
      name="guests"
      required
    />
    <Button id="booking-submit" type="submit" variant="dark" size="large">{{
      $t("CORE.SUBMIT")
    }}</Button>
  </form>
</template>

<script src="./Form.js"></script>
