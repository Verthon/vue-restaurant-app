<template>
  <b-button
    @click="handleClick"
    :type="currentType"
    :loading="loading"
    :disabled="disabled"
    :native-type="nativeType"
    :outlined="outlined"
    :size="size"
  >
    <slot />
  </b-button>
</template>

<script src="./Button.ts" lnag="ts"></script>
<style src="./Button.scss" lang="scss"></style>
