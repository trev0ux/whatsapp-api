<template>
  <div>
    <Nav />
    <b-container>
      <Banner
        id="home"
        title="WhatsApp API"
        description="Mensagens de suporte, alertas, notificações automáticas através
    do aplicativo utilizado por 9 em cada 10 brasileiros."
      />

      <About
        id="about"
        title="O que é o WhatsApp API?"
        textOne="A solução mais avançada para uso do WhatsApp por marcas de pequeno, médio e grande porte."
        textTwo="Com o WhatsApp API, empresas de todos os tamanhos poderão construir comunicações eficientes, escaláveis e automatizadas no app utilizado por 9 em cada 10 brasileiros."
        textThree="Com essa versão é possível enviar notificações, ter múltiplos atendentes,  realizar integrações e automatizações aprovadas pela WhatsApp Inc."
      />

      <HowToUse
        id="how-to-use"
        titleAction="Defina uma ação"
        descriptionAction="Escolha a oferta, selecione as frases, fluxos e configure o canal"
        titleApprove="Aprove"
        descriptionApprove="Forneça a permissão com o seu QR Code e nós preparamos todo o restante."
        titleGoals="Atinja metas"
        descriptionGoals="Alcance seus clientes com uma maior presença e acessibilidade."
      />
      <Benefits id="benefits" />
      <TabsMedia id="tabs" />
      <BenefitsLine id="benefits-line" />
      <Plans id="plans" />
      <FAQ id="faq" />
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '../components/Banner.vue';
import About from '../components/About.vue';
import HowToUse from '../components/HowToUse.vue';
import Benefits from '../components/Benefits.vue';
import TabsMedia from '../components/TabsMedia.vue';
import BenefitsLine from '../components/BenefitsLine.vue';
import Plans from '../components/Plans.vue';
import FAQ from '../components/FAQ.vue';
import Nav from '../components/Nav.vue';

export default {
  name: 'Home',
  components: {
    Nav,
    Banner,
    About,
    HowToUse,
    Benefits,
    TabsMedia,
    BenefitsLine,
    Plans,
    FAQ,
  }
};
</script>
