<template>
  <ul class="menu__list">
    <MenuItem
      v-for="item in category.data.data"
      :key="item.name"
      :name="item.name"
      :price="item.price"
      :description="item.description"
    />
  </ul>
</template>

<script>
import MenuItem from '@/components/Menu/MenuItem'
export default {
  props: {
    category: Object
  },
  components: {
    MenuItem
  }
}
</script>

<style lang="scss">
</style>
