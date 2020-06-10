<template>
  <b-container class="position-relative">
    <div class="tabs-media">
      <img class="ball-background" src="../assets/img/ball-plans.png" />
      <b-row>
        <b-col xl-12>
          <Tab />
        </b-col>
      </b-row>
      <img class="ball-background-2" src="../assets/img/ball-plans.png" />
    </div>
  </b-container>
</template>

<script>
import Tab from "./Tab.vue";

export default {
  name: "TabsMedia",
  props: {},
  components: {
    Tab
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/common/globals.scss";

.tabs-media {
  padding-top: 15%;

  .ball-background {
    position: absolute;
    top: 50%;
    left: -18%;
    width: 35%;

    @include media-breakpoint-down(md) {
      display: none;
    }

    &-2 {
      position: absolute;
      right: -7%;
      top: 28%;
      z-index: -1;
      opacity: 0.8;
      width: 40%;

      @include media-breakpoint-down(md) {
        display: none;
      }
    }
  }
}
</style>
