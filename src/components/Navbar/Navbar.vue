<template>
  <nav class="nav container" id="mainNav" aria-label="Main">
    <router-link class="nav__link" to="/">
      <h3 class="navbar__brand">Alkinoos Taverna</h3>
    </router-link>
    <MenuButton @toggle-navbar="handleNavbarToggle" />
    <NavList :isNavActive="active" :links="links" :withDashboard="true" />
  </nav>
</template>

<script>
import MenuButton from '@/components/Navbar/MenuButton'
import NavList from '@/components/Navbar/NavList'

export default {
  data () {
    return {
      firstRender: true,
      active: false
    }
  },
  props: {
    links: Array
  },
  methods: {
    handleNavbarToggle () {
      this.$emit('toggleNavbar')
      this.active = !this.active
    }
  },
  components: {
    MenuButton,
    NavList
  }
}
</script>

<style lang="scss">
.show {
  z-index: 1;
  background: $color-dark;
  padding: 2rem;
}

.nav {
  display: flex;
  width: 100%;
  -moz-box-pack: justify;
  justify-content: space-between;
  -moz-box-align: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 1.5rem;

  &__brand {
    font-size: 1.25rem;
    font-weight: 500;
    margin: 0;

    @include mQ($mobile) {
      font-size: 1.35rem;
    }

    &--decorative {
      font-family: $font-secondary;
    }
  }

  &__btn {
    padding: 0px;
    width: 1.5em;
    height: 1.1em;
    border: 0px none;
    display: flex;
    flex-direction: column;
    -moz-box-pack: justify;
    justify-content: space-between;
    cursor: pointer;
    background-color: transparent;
  }

  &__list {
    transform: translate(9999px);
    opacity: 0;
    display: none;
    @include mQ($ipadPro) {
      transform: translate(0);
      opacity: 1;
      display: flex;
      justify-content: flex-end;
      flex: 1;
      align-items: center;
    }
    &--active {
      transform: translate(0);
      opacity: 1;
      display: flex;
      padding: 0;
      justify-content: space-between;
      align-items: center;
      flex: 100%;
    }
  }

  &__item {
    @include mQ($ipadPro) {
      margin: 1rem 0 1rem 1rem;
    }
  }

  &__link {
    text-transform: capitalize;
    &--active {
      font-family: $font-semi-bold;
    }
  }
}
</style>
