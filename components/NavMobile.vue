<template>
  <div v-show="showNav" class="bg-nav">
    <div class="nav-mobile">
      <div class="logo">
        <h4>
          WhatsApp API
          <img class="wpp-icon" src="../assets/icons/whatsapp-web-icon.png" />
        </h4>
        <img
          class="close-icon"
          src="../assets/icons/close.svg"
          @click="showNav ^= true"
        />
      </div>
      <div class="nav-mobile__links">
        <div class="position-relative" @click="showNav ^= true">
          <li :class="{ active: selected == 1 }" @click="selected = 1">
            <scroll-link href="#about">O que é?</scroll-link>
          </li>
        </div>
        <div class="position-relative" @click="showNav ^= true">
          <li :class="{ active: selected == 2 }" @click="selected = 2">
            <scroll-link href="#how-to-use">Como funciona</scroll-link>
          </li>
        </div>
        <div class="position-relative" @click="showNav ^= true">
          <li :class="{ active: selected == 3 }" @click="selected = 3">
            <scroll-link href="#benefits">Benefícios</scroll-link>
          </li>
        </div>
        <div class="position-relative" @click="showNav ^= true">
          <li :class="{ active: selected == 4 }" @click="selected = 4">
            <scroll-link href="#plans">Planos</scroll-link>
          </li>
        </div>
        <div class="position-relative" @click="showNav ^= true">
          <li :class="{ active: selected == 5 }" @click="selected = 5">
            <scroll-link href="#faq">FAQ</scroll-link>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import scrollLink from './scrollLink';

export default {
  name: "NavMobile",
  components: {
    scrollLink
  },
  props: {},
  data: () => ({
    showNav: false,
    selected: undefined
  })
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/common/globals.scss";

.close-icon {
  position: absolute;
  right: 50px;
  top: 25px;
  width: 20px;
  height: 20px;
  fill: $text-color;
  cursor: pointer;

  @include media-breakpoint-down(md) {
    right: 23px;
    top: 20px;
  }

  @include media-breakpoint-down(sm) {
    top: 20px;
    right: 5%;
  }
}

.active {
  &::after {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    background-color: $primary-color;
    border-radius: 100%;
    top: 0;
  }
}

.bg-nav {
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  position: fixed;
  z-index: 1;
}

.nav-mobile {
  display: none;
  height: 100%;
  width: 50%;
  background: white;
  position: fixed;
  z-index: 1;
  padding: 15px 0 15px 15px;
  align-content: flex-start;

  @include media-breakpoint-down(md) {
    display: grid;
  }

  @include media-breakpoint-down(sm) {
    width: 80%;
  }

  &__links {
    display: grid;
    margin: 2% 0;
  }

  a {
    font-weight: bold;
    color: $text-color;
    text-decoration: none;
    position: relative;

    @include media-breakpoint-down(md) {
      display: grid;
      justify-content: flex-start;
      width: 100%;
      font-size: 18px;
      margin: 10px 0px;
      width: auto;
      padding-left: 10px;
    }
  }
}
</style>
