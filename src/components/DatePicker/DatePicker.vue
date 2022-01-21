<template>
  <b-datepicker
    @click="handleClick"
    :type="currentType"
    :loading="loading"
    :disabled="disabled"
    :native-type="nativeType"
    :outlined="outlined"
    :locale="locale"
    :size="size"
  >
    <slot />
  </b-datepicker>
</template>

<script src="./DatePicker.ts" lnag="ts"></script>
<style src="./DatePicker.scss" lang="scss"></style>
