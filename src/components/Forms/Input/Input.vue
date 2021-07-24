<template>
  <input class="input" :placeholder="placeholder" :value="value" @input="$emit('input', $event.target.value)" :required="required" />
</template>

<script src="./Input.js"></script>
<style src="./Input.scss" lang="scss"></style>
