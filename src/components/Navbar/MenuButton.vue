<template>
  <button
      className="nav__btn"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      @click={toggleNavbar}
    >
      <span className="btn__line" />
      <span className="btn__line" />
      <span className="btn__line" />
    </button>
</template>

<script>
export default {
  props: {
    toggleNavbar: Function
  }
}
</script>

<style lang="scss">
@import '../../styles/mixins.scss';
@import '../../styles/variables';

.nav__btn {
  padding: 0px;
  width: 1.5em;
  height: 1.1em;
  border: 0px none;
  display: flex;
  flex-direction: column;
  -moz-box-pack: justify;
  justify-content: space-between;
  cursor: pointer;
  background-color: transparent;

  @include mQ($ipadPro) {
    display: none;
  }
}

.btn__line {
  width: 20px;
  border-radius: 2px;
  display: flex;
  height: 0.2rem;
  background-color: $color-dark;
}
</style>
