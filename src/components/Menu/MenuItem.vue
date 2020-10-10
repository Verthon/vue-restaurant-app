<template>
  <li class="menu__item">
    <header class="menu__header">
      <h3 class="menu__item__name">{{name}}</h3>
      <span class="menu__item__price">{{price}}</span>
    </header>
    <p class="text menu__description">{{description}}</p>
  </li>
</template>

<script>
// import { formatPrice } from '@/utils/formatPrice'
export default {
  props: {
    name: String,
    price: String,
    description: String
  }
  // computed: {
  //   formattedPrice: formatPrice(this.price)
  // }
}
</script>

<style>
</style>
