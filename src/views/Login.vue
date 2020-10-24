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
          <Button data-testid="login-submit" type="submit" variant="dark" size="large" :disabled="auth.isAuthorized">
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
import { mapActions, mapState } from 'vuex'
import Navbar from '@/components/Navbar/Navbar.vue'
import Input from '@/components/Forms/Input/Input.vue'
import Label from '@/components/Forms/Label/Label.vue'
import Button from '@/components/Button/Button.vue'
import img from '@/assets/landing/brooke-lark-book-table.jpg'
import * as types from '@/types/store'
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
  computed: {
    ...mapState({
      auth: (state) => state.auth
    })
  },
  methods: {
    ...mapActions({ doLogin: types.ACTION_AUTH_LOGIN }),
    handleSubmit: async function () {
      const credentials = {
        email: this.email,
        password: this.password
      }
      await this.doLogin(credentials)
      this.$router.push({ path: 'admin' })
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
