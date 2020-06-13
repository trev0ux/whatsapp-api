<template>
  <div class="banner">
    <b-container class="position-relative">
      <img class="box-background" src="../assets/img/background-home.png" alt="background boxes" />
      <b-row>
        <b-col
          xl="6"
          md="12"
          sm="12"
          class="d-flex align-items-center order-md-2 order-xl-1 order"
        >
          <div data-aos="fade-right" class="banner__text-home">
            <h1>
              {{ title }}<img src="../assets/icons/whatsapp-web-icon.png" alt="icon-whatsapp"/>
            </h1>
            <p>{{ description }}</p>
        <div class="button">
            <button class="btn-primary">
                <scroll-link href="#plans">Saiba mais</scroll-link>
            </button>
        </div>         
     </div>
        </b-col>
        <b-col
          xl="6"
          md="12"
          sm="12"
          class="mt-sm-4 order-md-1 d-md-flex justify-content-center align-items-center"
        >
          <img class="banner__mascote" src="../assets/img/mascote.svg" alt="Mascote Volare Host"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import scrollLink from './scrollLink';

export default {
  name: 'Banner',
  props: {
    title: String,
    description: String
  },
  components: {
    scrollLink
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/common/globals.scss";

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.order {
  @include media-breakpoint-down(sm) {
    order: 2;
  }
}

p {
  text-align: left;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;

  @include media-breakpoint-down(sm) {
    font-size: 16px;
  }
}

.box-background {
  position: absolute;
  right: -16%;
  top: -10px;
  z-index: -1;

  @include media-breakpoint-down(sm) {
    max-width: 100% !important;
    height: auto !important;
    right: 0;
  }

  @include media-breakpoint-down(md) {
    width: 64%;
    height: 60%;
    right: 0;
  }
}

.banner {
  margin: 5% 0 10%;
  &__mascote {
    position: relative;
    top: 15%;
    left: 5%;
    width: 100%;
    animation: 2s bounce-in;

    @include media-breakpoint-down(md) {
      order: 1;
      height: auto;
      top: 20px;
      max-width: 80%;
      margin-top: 50px;
    }

    @include media-breakpoint-down(sm){
      height: 80% !important;
    }
  }

  @keyframes bounce-in {
    25% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1);
    }
    75% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }

  &__text-home {
    display: grid;
    justify-items: flex-end;

    img {
      width: 30px;
      height: 30px;
      position: absolute;
      right: -30px;
      top: 0px;

      @include media-breakpoint-down(md) {
        right: 0% !important;
        top: -15px;
        left: 50%;
        width: 25px;
        height: 25px;
      }
    }
  }
}
</style>
