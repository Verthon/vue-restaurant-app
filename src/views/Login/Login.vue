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
          <Button data-testid="login-submit" type="submit" variant="dark" size="large" :disabled="isAuthorized">
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

<script src="./Login.ts" lang="ts"></script>
<style src="./Login.scss" lang="scss"></style>
