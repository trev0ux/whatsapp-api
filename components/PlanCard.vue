<template>
  <div class="plan-card">
    <img src="../assets/img/Recomend.svg" />
    <div class="plan-card__content">
      <h3>{{ titlePlan }}</h3>
      <p>{{ benefitsPlan }}</p>
      <h2 class="plan-card__content--price">
        R$<b>{{ valuePlan }}</b>
      </h2>
      <p>/mensais</p>
      <span>valor sem desconto</span>
      <hr />
      <select>
        <option>Plano mensal</option>
      </select>
    </div>
    <Button class="d-flex justify-content-center" text="Obter Agora" />
  </div>
</template>
<script>
import Button from './Button.vue';

export default {
  name: "PlanCard",
  components: {
    Button,
  },
  props: {
    titlePlan: String,
    benefitsPlan: String,
    valuePlan: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/common/globals.scss";

.plan-card {
  background: #ffffff;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  display: grid;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 35% 10%;
  border-top: 5px solid #e0e0e0;
  transition: 0.5s ease-in-out;

  &:hover {
    transform: scale(0.98);
    box-shadow: 20px 10px 30px rgba(0, 0, 0, 0.1),
      1px 3px 20px rgba(0, 0, 0, 0.04);
  }

  @include media-breakpoint-down(md) {
    padding: 15% 5%;
  }

  img {
    display: none;
  }

  &__content {
    display: grid;
    justify-content: center;
    color: #383838;
    text-align: center;

    h4 {
      font-weight: 800;
    }

    p {
      font-size: 18px;
    }

    hr {
      height: 2px;
      background: #f0f0f0;
      width: 100%;
      border: none;
      margin-top: 5px;
      margin-bottom: 20px;
    }

    &--price {
      color: $secondary-color;
      font-size: 36px;
      margin: 0;

      b {
        font-size: 52px;
        font-weight: 800;
      }
    }

    span {
      text-transform: uppercase;
      font-size: 10px;
    }

    select {
      border: 1px solid $secondary-color;
      box-sizing: border-box;
      border-radius: 5px;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      color: $secondary-color;
      font-size: 18px;
      padding: 5px;
      background: transparent;

      option {
        &:focus {
          border: 1px solid $secondary-color;
        }
      }

      &:focus {
        border: 1px solid $secondary-color;
      }
    }
  }
}

.recomendation {
  background: linear-gradient(180deg, #26c195 0%, #33d87d 100%);
  box-shadow: 20px 10px 30px rgba(0, 0, 0, 0.1),
    1px 3px 20px rgba(0, 0, 0, 0.04);
  border-top: 6px solid $white;

  img {
    position: absolute;
    top: -12px;
    left: 10px;
    display: block;
  }

  .btn-primary {
    background-color: $white !important;
    background-image: $white !important;
  }

  .plan-card__content {
    color: $white !important;

    select {
      border-color: $white;
      color: $white;
    }

    &--price {
      color: $white;
    }
  }
}
</style>
