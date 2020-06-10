<template>
  <div class="about">
    <b-container class="position-relative">
      <img class="ball-background" src="../assets/img/ball-background.png" />
      <b-row>
        <b-col xl="6" md="12" sm="12">
          <div class="about__text-content" data-aos="fade-right">
            <span class="green-line"></span>
            <h2>{{ title }}</h2>
            <div class="about__text-content--paragraph">
              <img src="../assets/icons/Lamp.svg" />
              <p>{{ textOne }}</p>
            </div>
            <div class="about__text-content--paragraph">
              <img src="../assets/icons/Modem.svg" />
              <p>{{ textTwo }}</p>
            </div>
            <div class="about__text-content--paragraph">
              <img src="../assets/icons/Conversation.svg" />
              <p>{{ textThree }}</p>
            </div>
          </div>
        </b-col>
        <b-col xl="6" md="6" sm="12" class="phone">
          <img
            class="about__phone"
            data-aos="fade-up-right"
            src="../assets/img/phone.png"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    textOne: String,
    textTwo: String,
    textThree: String,
    title: String,
    description: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/common/globals.scss";

.phone {
  @include media-breakpoint-down(md) {
    display: none;
  }
}

.about {
  padding-top: 15%;

  .ball-background {
    position: absolute;
    right: -15%;

    @include media-breakpoint-down(md) {
      top: 60%;
      width: 100%;
      display: none;
    }
  }

  &__phone {
    left: 18%;
    position: relative;

    @include media-breakpoint-down(sm) {
      left: 0;
      width: 60%;
    }
  }

  &__text-content {
    display: grid;
    justify-items: flex-start;

    div {
      &:nth-child(4) {
        margin-left: 35px;

        @include media-breakpoint-down(sm) {
          margin-left: 0;
        }
      }

      &:nth-child(5) {
        margin-left: 65px;

        @include media-breakpoint-down(sm) {
          margin-left: 0;
        }
      }
    }

    &--paragraph {
      display: flex;
      align-items: center;
      margin-bottom: 38px;

      p {
        text-align: justify;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        margin: 0;
      }

      img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
    }
  }
}
</style>
