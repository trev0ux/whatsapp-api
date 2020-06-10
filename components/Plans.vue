<template>
    <div class="plans">
        <b-container class="d-grid justify-content-center position-relative">
            <img src="../assets/img/ball-plans.png" class="ball-1" />
            <h2>Planos mensais que cabem no seu bolso</h2>
            <p>
                Atenda seus clientes de forma eficiente via chat. Tudo integrado, com controle,
                histórico de conversas e número de atendentes ilimitados.
            </p>
            <b-row class="justify-content-between">
                <b-col xl="3" lg="3" md="6" sm="6" xs="4" class="mb-3" data-aos="fade-down"
              data-aos-duration="1000">
                    <PlanCard titlePlan="Plano Orion" benefitsPlan="2500 envios" valuePlan="30,00" />
                </b-col>
                <b-col xl="3" lg="3" md="6" sm="6" xs="4" class="mb-3" data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="1000">
                    <PlanCard titlePlan="Plano Sirius" benefitsPlan="5000 envios" valuePlan="59,90" class="recomendation" />
                </b-col>
                <b-col xl="3" lg="3" md="6" sm="6" xs="4" class="mb-3" data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1000">
                    <PlanCard titlePlan="Plano Taurus" benefitsPlan="10000 envios" valuePlan="99,90" />
                </b-col>
                <b-col xl="3" lg="3" md="6" sm="6" xs="4" class="mb-3" data-aos="fade-down"
              data-aos-delay="600"
              data-aos-duration="1000">
                    <PlanCard titlePlan="Plano Fênix" benefitsPlan="100000 envios" valuePlan="209,90" />
                </b-col>
            </b-row>
            <img src="../assets/img/ball-plans.png" class="ball-2" />
        </b-container>
    </div>
</template>
<script>
import PlanCard from './PlanCard'
export default {
    name: 'Plans',
    components: {
        PlanCard,
    },
    props: {
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/common/globals.scss';

.plans {
    padding: 10% 0;
    text-align: center;

    h2 {
        margin-bottom: 30px;
    }

    p {
        margin-bottom: 50px;
        padding: 0 15%;

        @include media-breakpoint-down(sm) {
            text-align: left;
            padding: 0;
        }
    }

    .ball-1 {
        position: absolute;
        z-index: -1;
        left: -19%;
        top: -9%;

        @include media-breakpoint-down(md) {
            display: none;
        }
    }

    .ball-2 {
        position: absolute;
        right: -19%;
        bottom: -4%;
        z-index: -1;

        @include media-breakpoint-down(md) {
            display: none;
        }
    }
}
</style>
