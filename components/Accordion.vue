<template>
    <div role="tablist">
        <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button v-b-toggle.accordion-1 block variant="info">Como é feita a integração com outros softwares? <img class="chevron-down when-open" src="../assets/icons/chevron-down.svg"/><img class="chevron-down when-closed" src="../assets/icons/chevron-up.svg"/></b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <b-card-text
                        >I start opened because <code>visible</code> is
                        <code>true</code></b-card-text
                    >
                    <b-card-text>{{ text }}</b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button v-b-toggle.accordion-2 block variant="info">Accordion 2<img class="chevron-down when-open" src="../assets/icons/chevron-down.svg"/><img class="chevron-down when-closed" src="../assets/icons/chevron-up.svg"/></b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <b-card-text>{{ text }}</b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button v-b-toggle.accordion-3 block variant="info">Accordion 3 <img class="chevron-down when-open" src="../assets/icons/chevron-down.svg"/><img class="chevron-down when-closed" src="../assets/icons/chevron-up.svg"/></b-button>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <b-card-text>{{ text }}</b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
        }
    },
}
</script>
<style scoped lang="scss">
@import '../assets/scss/common/globals.scss';

.card {
    border: none !important;
    padding: 0 20%;

    @include media-breakpoint-down(sm) {
        padding: 0;
    }
}

.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}

        .chevron-down{
            float: right;
            width: 30px;
            height: 30px;
            transition: all 2s linear;
        }

        .up{
            transform: rotate(-180deg);
        }

.card-header {
    border-bottom: 1px solid #e0e0e0;
    border-radius: 0;
    background: transparent;

    .btn-info {
        background: transparent !important;
        color: $text-color;
        border: none !important;
        padding: 15px 10px;
        text-align: left;

        @include media-breakpoint-down(sm){
            font-size: 14px;
        }

        img{
            animation: 0.3s ease-in;
        }



        &:focus {
            box-shadow: none !important;
        }


    }
}
</style>
