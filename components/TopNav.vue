<script>
export default {
  name: 'menu-topo',
  mounted() {
    $('nav ul li').on('mouseenter', function () {
      $('ul', this).addClass('active');
    });
    $('nav ul li').on('mouseleave', function() {
      $('ul', this).removeClass('active');
    });
    $('.todos,.todos-content').on('mouseenter', (e) => {
      $('.todos-content').addClass('active');
    });

    $('.todos-content,nav ul li').on('mouseleave', e => {
      $('.todos-content').removeClass('active');
    });

    $('.sidenav li').on('click', function (e) {
      $('.sidenav li').removeClass('active');
        $(this).addClass('active');
      $('.sidenav li:not(.active) ul').slideUp(10);
      $('ul', this).slideToggle(10);
    });

    $('.sidenav li').on('focusout', function(e) {
      $('ul', this).slideUp();
    });

    $('#active-menu-mobile').on('click', e => {
      e.preventDefault();
      $('.sidenav').addClass('active');
      $('.menu-mobile .bg').addClass('active');
    });

    $('.menu-mobile .bg').on('click', e => {
      e.preventDefault();
      $('.sidenav').removeClass('active');
      $('.menu-mobile .bg').removeClass('active');
    });
  }
};
</script>

<template>
  <section class="menu-topo">
    <div class="topo hide-on-med-and-down">
      <div class="all-topo">
        <div class="left">
          <a href="/">
            <img
              src="../assets/img/volarehost.png"
              style="width:180px"
              alt=""
            />
          </a>
        </div>
        <ul class="links flex right">
          <li>
            <i class="fas fa-receipt"></i>
            <a href="https://boletos.volarehost.com.br/" target="blank"
              >2ª Via do Boleto</a
            >
          </li>
          <li class="not">
            <i class="fas fa-money-check-alt"></i>
            <a
              href="https://www.volarehost.com.br/central/clientarea.php?action=invoices"
              >Confirmar Depósito</a
            >
          </li>
          <li class="  entrar">
            <a
              href="https://www.volarehost.com.br/central/clientarea.php"
              class="flex"
            >
              <img src="../assets/img/entrar.svg" alt="" /> Área do cliente</a
            >
          </li>
        </ul>
      </div>
    </div>

    <nav>
      <div class="all">
        <div class="left">
          <ul>
            <li>
              <a href="https://www.produtos.volarehost.com.br/whatsapp-api">
                WhatsApp API
              </a>
            </li>
            <li>
              <a href="https://www.produtos.volarehost.com.br/dominio">
                Domínio
              </a>
            </li>
            <li class="hospedagem">
              <a>
                Para seu negócio
                <i class="ion-md-arrow-dropdown"></i>
              </a>
              <ul class="hospedagem">
                <!-- <li><a href="https://www.produtos.volarehost.com.br/dominio/"> <i class="fas fa-globe"></i> <span>Domínio</span></a></li> -->
                <li>
                  <a href="https://www.volarehost.com.br/hospedagem-de-sites/"
                    ><i class="fas fa-hdd"></i
                    ><span> Hospedagem de Sites</span></a
                  >
                </li>
                <li>
                  <a href="https://www.volarehost.com.br/revenda-hospedagem/"
                    ><i class="fas fa-hand-holding-usd"></i>
                    <span>Revenda de Hospedagem</span></a
                  >
                </li>
                <!-- <li>
                <a href="https://www.volarehost.com.br/email-economico/"><i class="fas fa-envelope"></i> <span>E-mail Econômico</span></a>
              </li> -->
                <li>
                  <a href="https://www.volarehost.com.br/email-corporativo/"
                    ><i class="fas fa-envelope-open"></i>
                    <span>E-mail Corporativo</span></a
                  >
                </li>
              </ul>
            </li>
            <li>
              <a>
                Para sua empresa
                <i class="ion-md-arrow-dropdown"></i>
              </a>
              <ul class="vps">
                <li class="col s12">
                  <a href="https://www.produtos.volarehost.com.br/vps/#br"
                    ><i class="fas fa-server"></i> <span>VPS no Brasil</span></a
                  >
                </li>
                <li class="col s12">
                  <a href="https://www.produtos.volarehost.com.br/vps/#eua"
                    ><i class="fas fa-server"></i> <span>VPS nos EUA</span></a
                  >
                </li>
                <li class="col s12">
                  <a href="https://www.volarehost.com.br/servidores-dedicados/"
                    ><i class="fas fa-server"></i>
                    <span>Servidores dedicados</span></a
                  >
                </li>
                <!-- <li class="col s12">
									<a href="vps-cpanel/#brasil"><i class="fab fa-cpanel"></i> <span>VPS cPanel no Brasil</span></a>
								</li>
								<li class="col s12">
									<a href="vps-cpanel/#eua"><i class="fab fa-cpanel"></i> <span>VPS cPanel nos EUA</span></a>
								</li> -->
              </ul>
            </li>
            <li>
              <a>
                Para seu servidor
                <i class="ion-md-arrow-dropdown"></i>
              </a>

              <ul class="provedor">
                <li class="col s12">
                  <a
                    href="https://www.produtos.volarehost.com.br/mk-auth#brasil"
                    ><i class="fas fa-cloud"></i
                    ><span>MK-Auth Cloud no Brasil</span></a
                  >
                </li>
                <li class="col s12">
                  <a href="https://www.produtos.volarehost.com.br/mk-auth#eua"
                    ><i class="fas fa-cloud"></i
                    ><span>MK-Auth Cloud nos EUA</span></a
                  >
                </li>
                <li class="col s12">
                  <a href=""
                    ><i class="fas fa-cloud"></i><span>Cloud IXC</span></a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="right">
          <ul>
            <li id="todos" class="todos">Todos <i class="ion-md-apps"></i></li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="todos-content">
      <div class="todos-content__itens">
        <b-row class="row">
          <b-col lg="3" md="3">
            <h6>Para seu negócio</h6>
            <a href="https://www.produtos.volarehost.com.br/whatsapp-api/"> WhatsApp API </a>
            <br />
            <a href="https://www.produtos.volarehost.com.br/dominio/">
              Domínio </a
            ><br />
            <a href="https://www.volarehost.com.br/hospedagem-de-sites/"
              >Hospedagem de sites</a
            ><br />
            <a href="https://www.volarehost.com.br/revenda-hospedagem/"
              >Revenda de Hospedagem</a
            ><br />
            <!-- <a href="https://www.volarehost.com.br/email-economico/">E-mail Econômico</a><br> -->
            <a href="https://www.volarehost.com.br/email-corporativo/"
              >E-mail Corporativo</a
            ><br />
          </b-col>
          <b-col lg="3" md="3">
            <h6>Para a sua empresa</h6>
            <a
              href="https://www.produtos.volarehost.com.br/vps/#br"
              class="modal-close"
              >VPS no Brasil</a
            ><br />
            <a
              href="https://www.produtos.volarehost.com.br/vps/#eua"
              class="modal-close"
              >VPS nos EUA</a
            ><br />
            <!-- <a href="vps-cpanel/#brasil" class="modal-close">VPS cPanel no Brasil</a><br>
          <a href="vps-cpanel/#eua" class="modal-close">VPS cPanel nos EUA</a><br> -->
            <a href="https://www.volarehost.com.br/servidores-dedicados/"
              >Servidores Dedicados</a
            >
          </b-col>
          <b-col lg="3" md="3">
            <h6>Para seu provedor</h6>
            <a
              href="https://www.produtos.volarehost.com.br/mk-auth/#brasil"
              class="modal-close"
              >MK-Auth Cloud no Brasil</a
            ><br />
            <a
              href="https://www.produtos.volarehost.com.br/mk-auth/#eua"
              class="modal-close"
              >MK-Auth Cloud nos EUA</a
            ><br />
            <a href="" class="modal-close">Cloud IXC</a><br />
          </b-col>
          <b-col lg="3" md="3">
            <h6>Geral</h6>
            <a href="https://www.volarehost.com.br/quem-somos/">Quem Somos</a
            ><br />
            <a
              href="https://www.volarehost.com.br/central/submitticket.php?step=2&deptid=1"
              >Suporte</a
            ><br />
            <a href="https://blog.volarehost.com.br/">Blog</a><br />
            <a href="https://www.volarehost.com.br/fale-conosco/">Contato</a
            ><br />
          </b-col>
        </b-row>
      </div>
    </div>

    <!-- Menu mobile -->
    <section class="menu-mobile">
      <div class="topo-mobile">
        <a id="active-menu-mobile" href="" class="menu-in">
          <i class="ion-md-menu"></i>
        </a>

        <img src="../assets/img/volarehost.png" class="brand" alt="" />
      </div>
      <div class="bg"></div>
      <div class="sidenav">
        <ul id="mobile-demo" class="sidenav-ul">
          <a href="/">
            <img
              src="../assets/img/volarehost.png"
              style="width:150px;margin:1.5rem 0px 2rem 2rem"
              alt=""
            />
          </a>
          <h3 style="font-size:1.3rem;font-weight:bold;margin-left:2rem">
            Links úteis
          </h3>
          <div class="fl">
            <li>
              <a href="https://boletos.volarehost.com.br/" target="blank"
                ><i class="fas fa-receipt"></i>2ª Via do Boleto</a
              >
            </li>
            <li>
              <a
                href="https://www.volarehost.com.br/central/clientarea.php?action=invoices"
              >
                <i class="fas fa-money-check-alt"></i>Confirmar Depósito</a
              >
            </li>
            <li>
              <a
                href="https://www.volarehost.com.br/central/clientarea.php"
                class="flex"
              >
                <img src="../assets/img/entrar.svg" alt="" /> Área do cliente</a
              >
            </li>
          </div>

          <h3 style="font-size:1.3rem;font-weight:bold;margin-left:2rem">
            Produtos
          </h3>
          <div class="produtos">
        <li class="hospedagem">
              <a class="icon"
                >Para seu negócio <i class="ion-md-arrow-dropdown"></i>
              </a>
              <ul class="hospedagem">
                <li>
                  <a href="hospedagem-de-sites/"
                    ><i class="fas fa-hdd"></i
                    ><span> Hospedagem de Sites</span></a
                  >
                </li>
                <li>
                  <a href="revenda-hospedagem/"
                    ><i class="fas fa-hand-holding-usd"></i>
                    <span>Revenda de Hospedagem</span></a
                  >
                </li>
                <!-- <li>
                <a href="email-economico/"><i class="fas fa-envelope"></i> <span>E-mail Econômico</span></a>
              </li> -->
                <li>
                  <a href="email-corporativo/"
                    ><i class="fas fa-envelope-open"></i>
                    <span>E-mail Corporativo</span></a
                  >
                </li>
              </ul>
            </li>

            <li class="vps sub">
              <a class="icon"
                >Para sua empresa <i class="ion-md-arrow-dropdown"></i>
              </a>
              <ul class="vps">
                <li class="col-12">
                  <a href="servidores-vps/#brasil"
                    ><i class="fas fa-server"></i> <span>VPS no Brasil</span></a
                  >
                </li>
                <li class="col-12">
                  <a href="servidores-vps/#eua"
                    ><i class="fas fa-server"></i> <span>VPS nos EUA</span></a
                  >
                </li>
                <li>
                  <a href="servidores-dedicados/"
                    ><i class="fas fa-server"></i>
                    <span>Servidor Dedicado</span></a
                  >
                </li>
                <!-- <li class="col s12">
									<a href="vps-cpanel/#brasil"><i class="fab fa-cpanel"></i> <span>VPS cPanel no Brasil</span></a>
								</li>
								<li class="col s12">
									<a href="vps-cpanel/#eua"><i class="fab fa-cpanel"></i> <span>VPS cPanel nos EUA</span></a>
								</li> -->
              </ul>
            </li>
            <li class="provedor sub">
              <a class="icon"
                >Para seu provedor <i class="ion-md-arrow-dropdown"></i>
              </a>
              <ul class="provedor">
                <li class="col-12">
                  <a
                    href="https://www.produtos.volarehost.com.br/mk-auth#brasil"
                    ><i class="fas fa-cloud"></i
                    ><span>MK-Auth Cloud no Brasil</span></a
                  >
                </li>
                <li class="col-12">
                  <a href="https://www.produtos.volarehost.com.br/mk-auth#eua"
                    ><i class="fas fa-cloud"></i
                    ><span>MK-Auth Cloud nos EUA</span></a
                  >
                </li>
                <li class="col-12">
                  <a href=""
                    ><i class="fas fa-cloud"></i><span>Cloud IXC</span></a
                  >
                </li>
              </ul>
            </li>
          </div>
        </ul>
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/scss/_mixins";

$primary: #15376b;

.topo-mobile {
  background-color: #fff;
  height: 50px;
  @include flex;
  align-items: center;
  width: 100%;
  img {
    width: 150px;
    margin: 0 auto;
    display: block;
  }
  .menu-in {
    padding-left: 1rem;
    margin-right: -1rem;
    i {
      font-size: 2rem;
      color: #333;
    }
  }
}

ul{
  margin-bottom: 0 !important;
}

.menu-mobile {
  display: none;
  @include media-max(md) {
    display: block;
  }
  .bg {
    background-color: rgba(#000, 0.7);
    width: 100vh;
    height: 100vh;
    z-index: -9999;
    position: fixed;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;

    &.active {
      z-index: 9999;
      opacity: 1;
      visibility: visible;
    }
  }
  

}
.sidenav {
  background-color: #fff;
  height: 100vh;
  overflow-y: scroll;
  width: 80%;
  box-shadow: 0px 3px 20px rgba(#000, 0.1);
  top: 0;
  position: fixed;
  z-index: 9999;
  left: -100%;
  transition: all 0.3s ease-in-out;
  &.active {
    left: 0;
  }
  .produtos {
    margin-top: 1rem;
    li {
      padding: 1rem 0px;
      &.active {
        background-color: #eee;
      }
      a {
        height: 50px;
        color: #333;
        font-weight: 600;
        padding-left: 2rem;
      }
      ul {
        background-color: #eee;
        display: none;
        padding: 2rem 0px 0px 0px;
        li {
          a {
            height: 50px;
          }
          align-items: center;
        }
      }
    }
  }
  h3 {
    font-size: 1rem;
    font-weight: bold;
    color: #000;
  }
  .fl {
    background-color: $primary;
    color: #fff;
    padding: 1rem;
    box-sizing: border-box;
    margin: 0.7rem 0px 1.2rem 0px;
    li {
      margin: 0.4rem 1rem 2rem 1rem;
      &:last-child {
        margin-bottom: 0.4rem;
      }
    }
    a {
      display: block;
      font-weight: 400;
      i {
        margin-right: 0.5rem;
        font-size: 1rem;
      }
    }
    a,
    i {
      color: #fff;
    }
  }
}

.menu-topo {
  position: absolute;
  z-index: 9999;
  width: 100%;
  .topo,
  nav {
    @include media-max(md) {
      display: none !important;
    }
  }
}

nav {
  height: 46px;
  @include flex;
  align-items: center;
  justify-content: flex-start;
  border-top: 2px solid rgba(#000, 0.1);
  background-color: #fff;

.all {
  max-width: 1200px;
  margin: 0 auto;
  @include flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.left {
  ul {
    li {
      position: relative;

      &:hover {
        a {
          background-color: #eee;
        }
      }
      a {
        padding: 0px 1rem;
        height: 46px;
      }
    }
  }
}

.right {
  ul {
    li#todos {
      background-color: #eee;
      font-weight: 700;
      color: #000;
      height: 46px;
      @include flex;
      align-items: center;
      padding: 0px 2rem;
      cursor: pointer;
      i {
        font-size: 1.6rem;
        margin-left: 1rem;
      }
    }
  }
}

ul {
  @include flex;
  align-items: center;

  li {
    position: relative;
    cursor: pointer;
    a {
      font-weight: 800;
      color: #000;
      font-size: 0.96rem;
      @include flex;
      align-items: center;
      i {
        font-size: 1.2rem;
        margin-left: 0.4rem;
        margin-top: 0.2rem;
      }
    }
    ul {
      display: block;
      position: absolute;
      background-color: #eee;
      height: auto;
      margin-top: 0px;
      width: 400px;
      overflow: hidden;
      box-shadow: 0px 2px 10px rgba(#000, 0.05);
      transform: scale(0);
      opacity: 0;
      transition: all 0.3s ease-in-out;
      transform-origin: center;
      &.todos {
        width: 100%;
      }
      &.active {
        transform: scale(1);
        opacity: 1;
      }
      li {
        display: block;
        width: 100%;
        height: 55px;
        @include flex;
        align-items: center;
        &:hover {
          background-color: #f7f7f7 !important;
          a {
            background-color: #f7f7f7 !important;
            transform: translateX(20px);
          }
        }
        a {
          width: 100%;
          font-weight: 300;
          background-color: transparent;
          transition: transform 0.3s ease-in-out;

          i {
            margin-right: 1rem;
            color: rgb(92, 91, 91);
            font-size: 1.1rem;
          }
        }
      }
    }
  }
}

}
.topo {
  background-color: #fff;
  height: auto;
  border-bottom: none !important;
}
.all-topo {
  @include flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 70px;
  padding: 0px;
  background-color: #fff;
  overflow: hidden;
  ul {
    background-color: #fff;
    height: 80px;
    @include flex;
    background-color: #fff;
    align-items: center;
    li {
      @include flex;
      align-items: center;
      i {
        font-size: 1rem;
        color: rgba(#333, 0.7);
      }
      img {
        display: inline-block;
        margin-right: 0.5rem;
        margin-bottom: -2px;
      }
    }
  }
}

.todos-content {
  position: absolute;
  background-color: #eee;
  width: 100%;
  z-index: 88888;
  padding: 2rem;
  box-sizing: border-box;
  transform: scale(0);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out, z-index 0.2s !important;
  z-index: 88;
  opacity: 0;
  &.active {
    transform: scale(1);
    opacity: 1;
  }
}

.todos-content.active {
  height: auto;
  opacity: 1;
  transform: scale(1);
  z-index: 9999;
}

.todos-content a {
  background-color: transparent !important;
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  flex-flow: row wrap;
  align-items: center;
  flex-flow: row wrap;
  font-weight: 400 !important;
  transition: all 0.1s ease-in-out;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  height: 20px;
  line-height: 20px;
}

.todos-content h6 {
  font-weight: 800 !important;
  margin-bottom: 1.5rem;
  color: $primary;
  font-size: 1.1rem;
}

.todos-content a:hover {
  color: $primary;
}

.todos-content a {
  color: rgb(94, 95, 102);
}

.todos-content__itens {
  max-width: 1200px;
  margin: 0 auto;
}

.auto {
  width: 90%;
  max-width: 1300px;
  margin: 0 auto !important;
  @include flex;
  position: relative;
}

.busca {
  .el-input-group__append,
  .el-input-group__prepend {
    background-color: transparent;
    font-weight: bold;
    color: $--color-dark;
    border-color: rgba($--color-default, 0.3);
    font-size: 1.2rem;
    border-width: 1.5px;
  }

  .el-input-group > .el-input__inner,
  .el-input--suffix .el-input__inner {
    padding: 1.7rem 0.5rem;
    border-color: rgba($--color-default, 0.3);
    border-width: 1.5px;
    font-size: 1.1rem;
    font-family: "Roboto", sans-serif;
    width: 100%;
  }
}

.el-button {
  width: 100%;
  border-radius: 50px;
}

.el-collapse {
  width: 100%;
}

.el-collapse-item__header {
  background-color: #f5f5f5;
  color: $--color-dark;
  font-size: 1.1rem;
  font-weight: 700;
  padding-left: 3rem;
  position: relative;
  &:before {
    content: "";
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50px;
    background-color: $--color-primary;
    position: absolute;
    margin-left: -1.7rem;
  }
}

.el-collapse-item__content {
  padding: 2rem;
  background-color: rgba(#f5f5f5, 0.3);
  color: #798b8b;
  font-size: 0.9rem;
  font-family: "Roboto", sans-serif;
}

.topo {
  background-color: #fff;
  width: 100%;
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  
}

.topo .all-topo {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.topo .left {
  width: 40%;
}

.topo .left img {
  width: 100%;
  height: auto;
  max-width: 200px;
}

.topo .links {
  width: 60%;
  max-width: 1200px;
  text-align: right;
  justify-content: flex-end;
}

.topo .links li {
  color: rgb(105, 117, 122);
  list-style: none;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-size: 12px;
  margin-right: 40px;
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  flex-flow: row wrap;
  align-items: center;
}

.topo .links li:last-child {
  margin-right: 0px;
}

.topo .links li i {
  font-size: 1rem;
  margin-right: 0.6rem;
}

.topo .links li a {
  color: rgb(105, 117, 122);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  font-family: "Roboto", sans-serif;
  transition: all 0.1s ease-in-out;
  text-transform: initial;
}


a{
  text-decoration: none !important;

  &:hover{
    text-decoration: none !important;
  }
}
.topo .links li a:hover {
  color: #50207e;
}
</style>
