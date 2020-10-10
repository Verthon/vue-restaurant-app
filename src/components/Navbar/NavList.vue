<template>
  <ul className="menu__list">
    <NavItem key={item.name} menu={item} />
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
