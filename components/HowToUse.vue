<template>
  <div class="how-to-use">
    <b-container>
      <span class="green-line"></span>
      <h2>Como funciona o WhatsApp API?</h2>
      <b-row class="justify-content-between grid">
        <b-col col data-aos="fade-up" data-aos-duration="1000">
          <span class="how-to-use__number-ball">1</span>
          <div class="how-to-use__content">
            <img src="../assets/img/Action.svg" />
            <h5>{{ titleAction }}</h5>
            <p>{{ descriptionAction }}</p>
          </div>
        </b-col>
        <div class="how-to-use__line">
          <img src="../assets/img/Line 1.svg" />
        </div>
        <b-col
          col
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <span class="how-to-use__number-ball">2</span>
          <div class="how-to-use__content">
            <img src="../assets/img/Approve.svg" />
            <h5>{{ titleApprove }}</h5>
            <p>{{ descriptionApprove }}</p>
          </div>
        </b-col>
        <div class="how-to-use__line">
          <img src="../assets/img/Line 1.svg" />
        </div>
        <b-col
          col
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <span class="how-to-use__number-ball">3</span>
          <div class="how-to-use__content">
            <img src="../assets/img/Goals.svg" />
            <h5>{{ titleGoals }}</h5>
            <p>{{ descriptionGoals }}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HowToUse',
  props: {
    titleAction: String,
    descriptionAction: String,
    titleApprove: String,
    descriptionApprove: String,
    titleGoals: String,
    descriptionGoals: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/common/globals.scss";

.how-to-use {
  padding: 10% 0;

  .grid {
    @include media-breakpoint-down(sm) {
      display: grid !important;
    }
  }

  &__number-ball {
    color: $primary-color;
    font-weight: 800;
    height: 35px;
    width: 35px;
    border-radius: 100%;
    border: 2px solid $primary-color;
    display: grid;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 15%;
  }

  &__line {
    display: flex;
    align-items: center;
    height: 200px;

    @include media-breakpoint-down(md) {
      display: none;
    }
  }

  &__content {
    display: grid;
    justify-items: center;

    img {
      width: 200px;
      height: 200px;

      @include media-breakpoint-down(sm) {
        width: 150px;
        height: 150px;
      }
    }
  }

  p {
    font-size: 18px;
    font-weight: 300;
    text-align: center;

    @include media-breakpoint-down(sm) {
      font-size: 16px;
    }
  }
}
</style>
