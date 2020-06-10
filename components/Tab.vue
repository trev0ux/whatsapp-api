<template>
<b-tabs nav-class="item-media__nav" content-class="mt-3">
  <b-tab content-class="tab-content" title-item-class="item-media" title-link-class="item-media__link" title="Como funciona?" >
    <img src="../assets/img/video.png">
  </b-tab>
  <b-tab title-item-class="item-media" title-link-class="item-media__link" title="Aprenda a usar" lazy>
        <img src="../assets/img/video.png">
  </b-tab>
  <b-tab title-item-class="item-media" title-link-class="item-media__link" title="Detalhes" lazy>
            <img src="../assets/img/video.png"></b-tab>
</b-tabs>
</template>

<script>
export default {
  name: 'Tab',
  props: {

  },
};

</script>

<style scoped lang="scss">

    img{
      width: 100%;
    }

</style>