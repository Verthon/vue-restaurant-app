<template functional>
  <li class="nav__item">
    <router-link
      class="nav__link"
      data-testid="navlink"
      activeClassName="nav__link--active"
      :to="props.link"
    >
      {{ props.name }}
    </router-link>
  </li>
</template>

<style src="./NavItem.scss" lang="scss"></style>
