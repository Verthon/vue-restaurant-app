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

<script src="./Form.js"></script>
