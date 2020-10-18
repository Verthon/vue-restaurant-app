<template>
  <div>
    <Navbar :links="links" />
    <div class="container row">
      <div class="section section__col login">
        <h1 class="heading">{{$t('CORE.LOGIN')}}</h1>
        <form method="POST" class="login__form" @submit.prevent="handleSubmit">
          <Label htmlFor="email" class="label login__label"> Email </Label>
          <Input type="email" name="email" required v-model="email" />
          <Label htmlFor="email" class="label login__label"> Password </Label>
          <Input
            type="password"
            name="password"
            required
            v-model="password"
          />
          <p class="login__error">
            {{error ? $t('ERROR_MESSAGE.LOGIN') : null}}
          </p>
          <Button data-testid="login-submit" type="submit" variant="dark" size="large">
            {{$t('CORE.LOGIN')}}
          </Button>
        </form>
      </div>
      <div class="section section__col">
        <picture>
          <img :src="loginImg" alt="" class="table-booking__image" />
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from '@/components/Navbar/Navbar'
import Input from '@/components/Form/Input'
import Label from '@/components/Form/Label'
import Button from '@/components/Button'
import img from '@/assets/landing/brooke-lark-book-table.jpg'
export default {
  data: function () {
    return {
      loginImg: img,
      email: '',
      password: '',
      error: '',
      links: [
        { name: 'Menu', link: 'menu' },
        { name: 'Book Table', link: 'book-table' }
      ]
    }
  },
  methods: {
    ...mapActions('auth', ['doLogin']),
    handleSubmit: function async () {
      console.log('this', this.$store)
      await this.$store.dispatch('doLogin')
    }
  },
  components: {
    Navbar,
    Input,
    Label,
    Button
  }
}
</script>

<style lang="scss">
  .login__form {
    margin: 2rem 0;
  }
</style>
