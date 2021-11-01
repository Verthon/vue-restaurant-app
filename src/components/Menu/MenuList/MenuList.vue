<template>
  <ul class="menu__list">
    <MenuItem
      v-for="item in category"
      :key="item.name"
      :name="item.name"
      :price="item.price"
      :description="item.description"
    />
  </ul>
</template>

<script src="./MenuList.ts" lang="ts"></script>
