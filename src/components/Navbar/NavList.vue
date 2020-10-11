<template>
  <ul v-show="isNavActive" class="nav__list--active">
    <NavItem v-for="link in links" :key="link.name" :link="link.link" :name="link.name" />
  </ul>
</template>

<script>
import NavItem from '@/components/Navbar/NavItem'

export default {
  props: {
    isNavActive: Boolean,
    withDashboard: Boolean,
    links: Array
  },
  components: {
    NavItem
  }
}
</script>

<style lang="scss">

</style>
