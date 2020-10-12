<template>
  <div class="inputfield">
    <label for="" class="label">
      {{label}}
      <input type="text" class="input" placeholder="placeholder" >
    </label>
  </div>
</template>

<script>
export default {
  placeholder: String,
  label: String
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

.label {
  display: flex;
  align-self: flex-start;
  font-size: 0.875rem;
}
</style>
