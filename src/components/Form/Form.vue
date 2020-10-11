<template>
  <form @submit.prevent="handleSubmit">
    <Label for="name">Name</Label>
    <Input v-model="test" placeholder="Your name" name="name"/>
    <Label for="email">Email</Label>
    <Input v-model="test" placeholder="Your name" name="email" />
    <Label for="guests">Guests</Label>
    <Input v-model="test" placeholder="Number of guests" name="guests" />
    <Button type="submit" variant="dark" size="large">Submit</Button>
  </form>
</template>

<script>
import Input from '@/components/Form/Input'
import Label from '@/components/Form/Label'
import Button from '@/components/Button'
export default {
  components: {
    Input,
    Label,
    Button
  },
  methods: {
    handleSubmit () {
      console.log('handle submit')
    }
  }
}
</script>

<style>
</style>
