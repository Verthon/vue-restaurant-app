<template>
  <ul v-show="isNavActive" class="nav__list--active">
    <NavItem v-for="link in links" :key="link.name" :link="link.link" :name="link.name"/>
  </ul>
</template>

<script src="./NavList.js"></script>
