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
      <div class="discount">
      <span>{{ selected }}</span>
      </div>
      <hr />
      <p class="text">Escolha o ciclo de pagamento</p>
      <select v-model="selected">
        <option v-for="option in options" v-bind:value="option.discount" selected>
          {{ option.text }}
        </option>
      </select>
    </div>
        <div class="button d-flex justify-content-center">
        <button class="btn-primary">
            <a v-bind:href="url">{{textButton}}</a>
        </button>
    </div>
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
    valuePlan: String,  
    textButton: String,
    idUrl: String
    },
  data() {
    return {
      url: 'https://www.volarehost.com.br/central/cart.php?a=add&pid='+ this.idUrl +'&billingcycle=semiannually',
      selected: 'sem desconto',
      options: [
        { text: 'Trimestral', discount: '5% 0FF' },
        { text: "Semestral", discount: "10% OFF" },
        { text: 'Anual', discount: '15% OFF' },
      ]
    };
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

.text{
  font-size: 14px;
}
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
      margin: 0;
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
      background-color: #ffff;
      color: #009bdb;
      font-weight: 800;
      padding: 5px;
      border: 2px solid #009bdb;
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

  .discount{
    margin: 10px 0;
  }
}


//this class is for styled plan 
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

.button{
  button {
    background: $white !important;

    a{
          color: $primary-color !important;
    }
  }
}

  .plan-card__content {
    color: $white !important;

    select {
      border-color: $white;
      color: $white;
      background: $primary-color;
    }

    &--price {
      color: $white;
    }
  }
}

</style>
