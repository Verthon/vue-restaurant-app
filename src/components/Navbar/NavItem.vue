<template>
  <li className="nav__item">
    <router-link className="nav__link" data-testid="navlink" activeClassName="nav__link--active" to='link' >
      {{name}}
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

<style>
</style>
