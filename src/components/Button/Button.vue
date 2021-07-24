<template>
  <button
    v-bind="$attrs"
    v-on="$listeners"
    class="btn"
    :class="{
      'btn--dark': variant === 'dark',
      'btn--light': variant === 'light',
      'btn--transparent': variant === 'transparent',
      'btn--small': size === 'small',
      'btn--large': size === 'large',
    }"
    :type="type"
  >
    <slot />
  </button>
</template>

<script src="./Button.js"></script>
<style src="./Button.scss" lang="scss"></style>
