<template functional>
  <b-button
    v-on="$listeners"
    class="btn"
    :class="{
      'btn--dark': props.variant === 'dark',
      'btn--light': props.variant === 'light',
      'btn--transparent': props.variant === 'transparent',
      'btn--small': props.size === 'small',
      'btn--large': props.size === 'large',
    }"
    :type="props.type"
  >
    <slot />
  </b-button>
</template>

<style src="./Button.scss" lang="scss"></style>
