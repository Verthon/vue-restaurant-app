<template functional>
  <button
      class="nav__btn"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      @click="parent.$emit('toggle-navbar')"
    >
      <span class="btn__line" />
      <span class="btn__line" />
      <span class="btn__line" />
    </button>
</template>

<style src="./NavButton.scss" lang="scss"></style>
