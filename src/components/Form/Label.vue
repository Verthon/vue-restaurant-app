<template>
  <label for="for" class="label">
    <slot/>
  </label>
</template>

<script>
export default {
  props: {
    for: String
  }
}
</script>

<style lang="scss">
.label {
  display: flex;
  align-self: flex-start;
  font-size: 0.875rem;
}
</style>
