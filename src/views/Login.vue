<template>
  <div>
    <Navbar links="{links}" hashlink="{false}" />
    <div class="container row">
      <div class="section section__col login">
        <h1 class="heading">{{$t('CORE.LOGIN')}}</h1>
        <form method="POST" class="login__form" onSubmit="{onSubmit}">
          <Label htmlFor="email" class="label login__label"> Email </Label>
          <Input type="email" name="email" required onChange="{handleChange}" />
          <Label htmlFor="email" class="label login__label"> Password </Label>
          <Input
            type="password"
            name="password"
            required
            onChange="{handleChange}"
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
import Navbar from '@/components/Navbar/Navbar'
import Input from '@/components/Form/Input'
import Label from '@/components/Form/Label'
import Button from '@/components/Button'
import img from '@/assets/landing/brooke-lark-book-table.jpg'
export default {
  data: function () {
    return {
      loginImg: img
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

<style>
</style>
