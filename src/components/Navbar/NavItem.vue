<template>
  <li class="nav__item">
    <router-link
      class="nav__link"
      data-testid="navlink"
      activeClassName="nav__link--active"
      :to="link"
    >
      {{ name }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    link: String,
    name: String
  }
}
</script>

<style lang="scss">
.nav__item {
  @include mQ($ipadPro) {
    margin: 1rem 0 1rem 1rem;
  }
}

.nav__link {
  text-transform: capitalize;
  &--active {
    font-family: $font-semi-bold;
  }
}
</style>
