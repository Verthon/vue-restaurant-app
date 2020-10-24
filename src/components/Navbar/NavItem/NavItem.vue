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

<script src="./NavItem.js"></script>
<style src="./NavItem.scss" lang="scss"></style>
