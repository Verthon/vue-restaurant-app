<template>
  <button
    class="btn"
    :class="{
      'btn--dark': variant === 'dark',
      'btn--light': vairant === 'light',
      'btn--small': size === 'small',
      'btn--large': size === 'large',
    }"
    :type="type"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    size: String,
    variant: String,
    className: String,
    type: String
  }
}
</script>

<style lang="scss">
.btn {
  border: 0;
  border-bottom: 2px solid $color-primary;
  text-transform: uppercase;
  margin: 0 0.5rem 0 0;
  padding: 0.6rem 0.85rem;
  font-size: 1rem;
  cursor: pointer;
  display: inline-flex;
  box-shadow: $shadow-light;
  color: $color-dark;

  @include mQ($desktopXs) {
    font-size: 1rem;
    padding: 0.7rem 2rem;
  }

  &--small {
    padding: 0.5rem 1.25rem;
    font-size: 0.875rem;
    margin: 0;
  }

  &--large {
    padding: 0.6rem 2rem;
    @include mQ($desktopXs) {
      padding: 0.75rem 2.5rem;
    }
  }

  &--light {
    background-color: $color-light-2;
    color: $color-dark;
  }

  &--dark {
    background-color: $color-dark;
    color: $color-white;
    a {
      color: $color-white;
    }
  }

  &--transparent {
    background: transparent;
    border-bottom: 0;
    box-shadow: none;
  }
}
</style>
