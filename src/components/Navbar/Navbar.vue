<template>
  <nav class="nav container" id="mainNav" aria-label="Main">
    <router-link class="nav__link" to="/">
      <h3 class="navbar__brand">Alkinoos Taverna</h3>
    </router-link>
    <NavButton @toggle-navbar="handleNavbarToggle" />
    <NavList :isNavActive="active" :links="links" :withDashboard="true" />
  </nav>
</template>

<script src="./Navbar.js"></script>
<style src="./Navbar.scss" lang="scss"></style>
