<template>
  <div class="faq">
    <b-container class="position-relative">
      <div class="faq__title">
        <span class="green-line"></span>
        <h2>FAQ</h2>
      </div>
      <p>
        Atenda seus clientes de forma eficiente via chat. Tudo integrado, com
        controle, histórico de conversas e número de atendentes ilimitados.
      </p>
      <b-row>
        <b-col xl-12>
          <Accordion />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Accordion from "./Accordion";

export default {
  name: 'FAQ',
  props: {},
  components: {
    Accordion
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/common/globals.scss";

.faq {
  padding: 5% 0;
  h2 {
    text-align: center;
    margin-bottom: 30px;
  }

  &__title {
    display: grid;
    justify-content: center;
  }

  p {
    text-align: center;
    padding: 0 20%;
    margin-bottom: 35px;

    @include media-breakpoint-down(sm) {
      padding: 0;
    }
  }
}
</style>
