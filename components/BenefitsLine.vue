<template>
<div class="container position-relative d-sm-none">
    <div class="benefits-line row justify-content-between">
        <div class="benefits-line__icon">
            <img src="../assets/icons/Security.png">
            <h6>Segurança</h6>
            <p>Aumente o engajamento da sua base de clientes com o envio de
            notificações informativas.</p>
        </div>
        <div class="benefits-line__icon">
            <img src="../assets/icons/Time.png">
            <h6>Atendimento 24HRS</h6>
            <p>Aumente o engajamento da sua base de clientes com o envio de
            notificações informativas.</p>
        </div>
        <div class="benefits-line__icon">
            <img src="../assets/icons/Integration.png">
            <h6>Integração</h6>
            <p>Aumente o engajamento da sua base de clientes com o envio de
            notificações informativas.</p>
        </div>
    </div>
    <div class="benefits-line__line"></div>
</div>    
</template>
<script>
export default {
  name: 'BenefitsLine',
  props: {
    text: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/common/globals.scss';

.benefits-line{
    margin: 15% 0;

    @include media-breakpoint-down(sm){
      display: none !important;
    }

    &__icon {
        width: 25%;
        display: grid;
        justify-items: center;
        text-align: center;

        h6{
            text-transform: uppercase;
            font-weight: 800;
        }
    }

    &__line{
        width: 100%;
        border-bottom: 1px solid #f0f0f0;
        height: 1px;
        position: absolute;
        top: 16%;
        z-index: -1;
            @include media-breakpoint-down(sm){
      display: none !important;
    }
    }
}

</style>