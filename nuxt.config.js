/* eslint-disable prettier/prettier */

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'WhatsApp API - Volare Host',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1,max-scale=1,height=device-height' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css', rel: 'stylesheet'},
      {href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css', rel: 'stylesheet'},
      {href: 'https://unpkg.com/aos@2.3.1/dist/aos.css', rel: 'stylesheet'},
      {href: 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css', rel: 'stylesheet'},
     
    ],
    script: [
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/plugins/ScrollToPlugin.min.js'},
      {src: 'https://unpkg.com/aos@2.3.1/dist/aos.js'},
      {src: 'https://code.jquery.com/jquery-3.5.1.js'},
      {src: '//code.jivosite.com/widget.js', 'data-jv-id': 'UZeQgIztec', async: true},
      {src: 'https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyAt3PnEU7DjOJ9QkMfKCoYlMqNqsCPIdOw'},
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/common/globals.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
  ],
  /*
  ** Build configuration
  */
  build: {
    publicPath: '_whatsapp-api',
    extend(config, ctx) {

    }
  },

  generate: {
    routes: ['/','whatsapp-api']
  }

}
