<template>
  <div class="nav">
    <div id="nav" class="navbar">
      <div class="container">
        <div class="logo">
         <scroll-link href="#home"><h4>WhatsApp API</h4></scroll-link>
          <img class="wpp-icon" src="../assets/icons/whatsapp-web-icon.png" />
        </div>
        <div @click="showNav ^= true">
          <img class="navbar__mobile" src="../assets/icons/menu.svg" />
        </div>
        <div class="navbar__links">
          <div :class="{ active: selected == 1 }" @click="selected = 1">
            <scroll-link href="#about">O que é?</scroll-link>
          </div>
          <div :class="{ active: selected == 2 }" @click="selected = 2">
            <scroll-link href="#how-to-use">Como funciona</scroll-link>
          </div>
          <div :class="{ active: selected == 3 }" @click="selected = 3">
            <scroll-link href="#benefits">Benefícios</scroll-link>
          </div>
          <div :class="{ active: selected == 4 }" @click="selected = 4">
            <scroll-link href="#plans">Planos</scroll-link>
          </div>
          <div :class="{ active: selected == 5 }" @click="selected = 5">
            <scroll-link href="#faq">FAQ</scroll-link>
          </div>
        </div>
      </div>
    </div>
    <transition name="slide-fade">
      <NavMobile v-show="showNav" />
    </transition>
  </div>
</template>

<script>
import scrollLink from './scrollLink';
import NavMobile from './NavMobile';

export default {
  name: "Nav",
  components: {
    NavMobile,
    scrollLink,
  },
  props: {},
  data: () => ({
    selected: undefined,
    mobileView: true,
    showNav: false
  }),
  created() {
    this.handleView();
  },
  methods: {
    activate(el) {
      this.active_el = el;
    },
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/common/globals.scss";

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.active {
  &::after {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    background-color: $primary-color;
    border-radius: 100%;

    @include media-breakpoint-down(md) {
      left: -5px;
      top: 8px;
    }
  }
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.06);
  position: fixed;
  z-index: 1;

  @include media-breakpoint-down(sm) {
    font-size: 24px;
  }

  &__mobile {
    color: $text-color;
    width: 20px;
    fill: #152646;
    display: none;

    @include media-breakpoint-down(md) {
      display: block;
    }
  }

  @include media-breakpoint-down(sm) {
    font-size: 24px;
  }

  a {
    font-weight: bold;
    color: $text-color;
    text-decoration: none;
    position: relative;

    @include media-breakpoint-down(sm) {
      display: grid;
      justify-content: flex-start;
      width: 100%;
      font-size: 18px;
      margin: 10px 0px;
      width: auto;
      padding-left: 10px;
    }
  }

  &__links {
    display: flex;
    justify-content: space-evenly;
    width: 50%;

    @include media-breakpoint-down(md) {
      /*     display: grid;
    */
      display: none;
    }
  }
}

.open {
  transform: translate(300px);
}
</style>
