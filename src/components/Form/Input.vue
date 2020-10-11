<template>
  <input class="input" :placeholder="placeholder" />
</template>

<script>
export default {
  props: {
    placeholder: String
  }
}
</script>

<style lang="scss">
.input {
  border: 0;
  border-bottom: 2px solid $color-gray-3;
  padding: 0.5rem 0;
  display: block;
  margin: 0 0 2rem 0;
  width: 100%;

  &:focus {
    border-bottom: 2px solid $color-primary;
  }
}
</style>
