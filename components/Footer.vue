<script>
export default {
  name: 'Footer',
  props: {
    text: String,
  },
};
</script>

<template>
  <footer class="rodape">
    <div class="mascote">
      <img src="../assets/img/volarehost_mascote.svg" alt="">
    </div>
    <b-container>
   <header>
         <h2>
        Oferecemos o melhor custo beneficio
      </h2>
      <p>
     Ao contratar nossos serviços, você tem seu custo super reduzido e qualidade de PONTA!
      </p>
      <!-- <h1>
        VOLAREHOST
      </h1> -->
    </header>
    <div class="auto">
     <b-row style="width: 100%"> 
       <b-col lg="3" md="6" sm="8">
         <ul>
           <h4>
            PRODUTOS
           </h4>
           <li>
             <a href="https://www.produtos.volarehost.com.br/mk-auth">
               Mk-Auth
             </a>
           </li>
           <li>
             <a href="https://www.volarehost.com.br/hospedagem-de-sites/">
              Hospedagem linux EUA
             </a>
           </li>
           <li>
             <a href="https://www.produtos.volarehost.com.br/vps">
              VPS
             </a>
           </li>
           <li>
             <a href="https://www.volarehost.com.br/servidores-dedicados/">
              Servidores Dedicados
             </a>
           </li>
            <li>
             <a href="https://www.volarehost.com.br/email-corporativo">
              E-mail Corporativo
             </a>
           </li>
            <li>
             <a href="https://www.volarehost.com.br/revenda-hospedagem/">
              Revenda de Hospedagem
             </a>
           </li>
         </ul>
       </b-col>
            <b-col lg="3" md="6" sm="8">
         <ul>
           <h4>
             SOLUÇÕES
           </h4>
           <li>
             <a href="#" @click.prevent>
              Certificados SSL
             </a>
           </li>
           <li>
             <a href="#" @click.prevent>
              E-mail Marketing
             </a>
           </li>
           <li>
             <a href="#" @click.prevent>
              Licenças e Serviços WHMCS
             </a>
           </li>
           <li>
             <a href="#" @click.prevent>
              Streaming de Audio
             </a>
           </li>
         </ul>
       </b-col>
        <b-col lg="3" md="6" sm="8">
         <ul>
           <h4>
             EMPRESA
           </h4>
           <li>
             <a href="https://www.volarehost.com.br/sobre-nos/">
               Sobre nós
             </a>
           </li>
           <li>
             <a href="http://blog.volarehost.com.br/" target="_blanck">
              Notícias
             </a>
           </li>
           <li>
             <a href="#" @click.prevent>
             Trabalhe Conosco
             </a>
           </li>
           <li>
             <a href="#" @click.prevent>
              Programa de Afiliados
             </a>
           </li>
           <li>
             <a href="https://www.volarehost.com.br/termos-de-uso">
              Termos de uso
             </a>
           </li>
            <li>
             <a href="https://central.volarehost.com.br/supporttickets.php">
              Suporte
             </a>
           </li>
            <li>
             <a href="https://www.volarehost.com.br/fale-conosco/">
              Contate-nos
             </a>
           </li>
         </ul>
       </b-col>
       <b-col lg="3" md="6" sm="8"> 
         <div class="address">
           <img src="../assets/img/volarehost-branco.png" alt="">
           <p>Rua Diamantina 373 Loja A, Centro Itamarandiba MG </p>
  <p>  <i class="ion-ios.close icon"> </i> E-mail: atendimento@volarehost.com.br </p>
  <p class="bloco-localidade">
					<span class="mini-texto">Telefone</span><br>
					<a href="tel:080060681113" style="color:#fff">0800 606 8113</a><br>
        </p>
         </div>
       </b-col>
        <b-col class="sub"> 
         <div class="pagamento">
           <span>Formas de pagamento</span>
           <img src="../assets/img/pagamentos.svg" class="pagamentos" style="width:110%" alt="">
           <img src="../assets/img/pagamento-mobile.svg" class="pagamentos-mobile" style="width:100%" alt="">
         </div>
              <div class="social">
       <a href="https://www.facebook.com/volarehostoficial/?epa=SEARCH_BOX" target="_blanck">
         <i class="ion-logo-facebook"></i>
       </a>
         <a href="https://www.instagram.com/volarehostoficial/" target="_blanck">
         <i class="ion-logo-instagram"></i>
       </a>
         <a href="https://twitter.com/volarehost" target="_blanck">
         <i class="ion-logo-twitter"></i>
       </a>
     </div>
       </b-col>
     </b-row>
    </div>
    </b-container>
        <div class="footer">
     <div class="auto">
      <div>
          <p>
       VOLAREHOST - INTERNET DATA CENTER - Todos os direitos reservados © 2010 - 2019 CNPJ: 26.189.547/0001-70
      </p>
      </div>
    <!-- <div class="topo">
       <i class="ion-ios-arrow-up"></i>
     </div> -->
     </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '../assets/scss/_mixins';



img.pagamentos {
  min-width: 500px;
  display: block !important;
  @include media-max(sm) {
    display: none !important;
  }
}
img.pagamentos-mobile {
  display: none !important;
  @include media-max(sm) {
    display: block !important;
  }
}
.sub {
  @include flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  width: 100%;
      margin-top: 4rem;
    margin-bottom: -2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(#fff,.15);
}
.social {
  a {
    color: #fff;
    padding: 0px .5rem;
    opacity: .7;
    transition: opacity .2s ease-in-out;
    &:hover {
      opacity: 1;
    }
    i {
      font-size: 1.9rem;
    }
  }
  @include media-max(sm) {
    padding: 1rem 0px;
    margin: 0 auto;
    a {
      i {
      font-size: 2.7rem;
      margin: 0px .7rem
    }
    }
  }
}
.topo {
i {
  font-size: 2.5rem;
  color: rgba(#fff,.4)
}
float: right;
width: 3rem;
cursor: pointer;
transition: all .2s ease-in-out;
&:hover {
  transform: translateY(-5px);
  i {
    color: #fff;
  }
}
}
.footer {
  background-color: #112F48;
  height: 50px;
  @include flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  @include media-max(md) {
 margin-top: 4rem; 
 height: auto;
 padding: 1rem 0px;
}
  .auto {
      @include flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  }
  p {
    font-size: .8rem;
    font-weight: 300;
    margin: 0;
    color: #eee;
  }
}
.address {
  @include flex;
  align-items: center;
  justify-content: flex-end;
  flex-flow: row wrap;
  @include media-max(md) {
  justify-content: flex-start;
}
  img {
    width: 200px;
    margin-bottom: 2rem;
    @include media-max(md) {
 margin-bottom: 1rem; 
 margin-top: 2rem;
}
  }
  p {
    color: rgba(#f5f5f5,.7);
    text-align: right;
    font-weight: 300;
    margin: 0px;
    font-size: 1rem;
    @include media-max(md) {
  text-align: left;
}
  }
}
.rodape {
  border-top: 4px solid #f5f5f5;
  background: url('../assets/img/bg-rodape.jpg')no-repeat center $--color-primary;
  background-size: cover;
  height: auto;
  padding: 5rem 0px 0px 0px;
  margin-top: 20rem;
  position: relative;
  .pagamento {
    span {
      color: #fff;
      font-size: 1.3rem;
    }
    img {
      width: 100%;
      
      display: block;
      margin-top: 1rem;
    }
    @include media-max(sm) {
      text-align: center;
    }
  }
  header {
    width: 100%;
    text-align: center;
    color: #fff;
    margin: 0px 0px 9rem 0px;
     @include media-max(md) {
        margin: 0 auto;
        text-align: center;
        width: 80%;
      }
    h1 {
      position: absolute;
      font-size: 8rem;
      color: #fff;
      opacity: .1;
      left: 0;
      right: 0;
      margin: 0 auto;
      margin-top: -4rem;
      @include media-max(md) {
        font-size: 2rem;
        margin-top: 0px;
      }
    }
    h2 {
      color: #fff;
      font-size: 2rem;
    }
    p {
      color: #eee;
      font-weight: 300;
      margin-top: 1rem;
    }
  }
  .mascote {
    width: 50%;
    max-width: 250px;
    right: 5%;
    top: 0;
    margin-top: -15%;
    display: block;
    position: absolute;
    img {
      width: 100%;
      height: auto;
    }
  }
  @include media-max(md) {
    padding: 8rem 0px 0px 0px;
    margin-top: 10rem;
      .mascote {
        margin-top: -120px;
      }
}
  ul {
    h4 {
      font-size: 1.3rem;
      font-weight: 700;
      color: #fff;
      margin-bottom: 1.5rem;
    }
    li {
      a {
        padding: .6rem 0px;
        color: rgba(#fff,.7);
        display: block;
        position: relative;
        transition: all .2s ease-in-out;
        @include flex;
        align-items: center;
        font-size: .9rem;
        &:before {
          content: '';
          width: 0px;
          height: 0px;
          background-color: rgb(0, 255, 229);
          border-radius: 50px;
          margin-left: 0rem;
          position: absolute;
          transition: all .2s ease-in-out;
        }
        &:hover {
          padding-left: 1.5rem;
          color: #fff;
          &:before {
          content: '';
          width: .6rem;
          height: .6rem;
          margin-left: -1.5rem;
        }
        }
      }
    }
    @include media-max(md) {
margin-top: 2rem;  
}
  }
}

p{
  margin: 0 !important;
}

a{
  text-decoration: none !important;

  &:hover{
    text-decoration: none !important;
  }
}

</style>

