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
      {href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css', rel: 'stylesheet', async: true},
      {href: 'https://unpkg.com/aos@2.3.1/dist/aos.css', rel: 'stylesheet', async: true},
      {href: 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css', rel: 'stylesheet', async: true},
     
    ],
    script: [
      {src: 'https://unpkg.com/aos@2.3.1/dist/aos.js', async: true},
      {src: '//code.jivosite.com/widget.js', 'data-jv-id': 'UZeQgIztec', async: true},
      {src: 'https://code.jquery.com/jquery-3.4.1.min.js'},
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
  generate: {
    routes: ['/','whatsapp-api']
  }

}
