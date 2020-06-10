<template>
  <div class="benefits">
    <span class="green-line"></span>
      <h2>Principais benefícios</h2>
    <b-row>
      <b-col xl="6" md="6" sm="12">
        <div data-aos="fade-down-right">
          <img class="benefits__screens" src="../assets/img/Screens.png" />
        </div>
      </b-col>
      <b-col xl="6" md="6" sm="12">
        <div class="benefits__block">
          <h6>Benefícios</h6>
          <h5>Otimize seu envio de mensagens</h5>
          <ul>
            <li class="benefits__item">
              <img src="../assets/icons/check-icon.svg" />
              Envie notificações de qualquer lugar
            </li>
            <li class="benefits__item">
              <img src="../assets/icons/check-icon.svg" />
              Preste atendimento pela rede social preferida dos brasileiros
            </li>
            <li class="benefits__item">
              <img src="../assets/icons/check-icon.svg" />
              Melhore o relacionamento e aumente a satisfação dos seus clientes
            </li>
            <li class="benefits__item">
              <img src="../assets/icons/check-icon.svg" />
              Construa um relacionamento profissional com tecnologia de ponta
            </li>
            <li class="benefits__item">
              <img src="../assets/icons/check-icon.svg" />
              Garanta o cumprimento de todas as etapas de verificação junto ao
              WhatsApp
            </li>
            <li class="benefits__item">
              <img src="../assets/icons/check-icon.svg" />
              Agregue valor à sua marca com a plataforma
            </li>
            <li class="benefits__item">
              <img src="../assets/icons/check-icon.svg" />
              Responda às perguntas e forneça suporte aos seus clientes, em
              tempo real.
            </li>
          </ul>
          <Button text="Adquirir Já" />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Benefits',
  components: {
    Button
  },
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/common/globals.scss";

h5 {
  text-align: left;
}

h6 {
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  color: #aaaaaa;

  @include media-breakpoint-down(sm) {
    text-align: left;
  }
}

.benefits {
  padding-top: 75px;

  &__block {
    width: 100%;

    background-image: url("../assets/img/ball-benefits.png");
    background-repeat: no-repeat;
    background-size: contain;

    @include media-breakpoint-down(sm) {
      display: grid;
      justify-content: center;
    }
  }

  &__screens {
    max-width: 100%;

    @include media-breakpoint-down(sm) {
      padding: 0 0 50px 0;
    }
  }

  ul {
    padding: 0;
  }
  &__item {
    list-style-type: none;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    margin: 30px 0 0;

    img {
      margin-right: 15px;
    }
  }
}
</style>
