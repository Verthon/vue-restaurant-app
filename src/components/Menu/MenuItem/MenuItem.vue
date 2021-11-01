<template functional>
  <li class="menu__item">
    <header class="menu__header">
      <h3 class="menu__item__name">{{props.name}}</h3>
      <span class="menu__item__price">{{props.price}}</span>
    </header>
    <p class="text menu__description">{{props.description}}</p>
  </li>
</template>

<script src="./MenuItem.ts" lang="ts"></script>
