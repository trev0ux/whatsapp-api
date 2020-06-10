<template>
  <div id="app" class="app">
    <TopNav />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import jQuery from 'jquery';
import $ from 'jquery';
import TopNav from '@/components/TopNav';
import Footer from '@/components/Footer';

export default {
  components: {
    TopNav,
    Footer
  },
  mounted() {
    AOS.init();
  }
};
</script>
<style lang="scss">
@import "assets/scss/common/globals.scss";

.app {
  font-family: $font-family;
  color: $text-color;
}

.open {
  height: 350px;
  position: absolute;
  z-index: 1;
  padding: 0 30px;
}

.tab-content {
  display: flex;
  justify-content: center;
  padding: 3% 0 5%;
}

.item-media {
  width: 33%;
  color: $text-color;

  @include media-breakpoint-down(sm) {
    font-size: 12px;
  }

  a:hover {
    color: $text-color;
  }

  &__link {
    border: none !important;
    text-align: center;
    color: $text-color !important;
    font-weight: 700;

    margin: 0 10px;
    border-bottom: 5px solid rgba($secondary-color, 0.2) !important;

    &:focus {
      border: none !important;
      box-shadow: none !important;
      outline: none !important;
    }

    @include media-breakpoint-down(sm) {
      margin: 0 5px;
      padding: 0.5rem 0.5rem !important;
      font-size: 10px;
      height: 45px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }
  }

  &__nav {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3%;
    border-bottom: none;

    @include media-breakpoint-down(sm) {
      width: 100%;
    }
  }

  .active {
    border-bottom: 5px solid $secondary-color !important;
    background: transparent !important;
  }
}
</style>
