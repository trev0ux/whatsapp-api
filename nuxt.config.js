import webpack from 'webpack'
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
      {href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css', rel: 'stylesheet'},
      {href: 'https://unpkg.com/aos@2.3.1/dist/aos.css', rel: 'stylesheet'},
      {href: 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css', rel: 'stylesheet'},
     
    ],
    script: [
      {src: 'https://unpkg.com/aos@2.3.1/dist/aos.js'},
      {src: '//code.jivosite.com/widget.js', 'data-jv-id': 'UZeQgIztec', async: true},
      {src: 'https://code.jquery.com/jquery-3.4.1.min.js', async: true},
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
 modules: [
  // Doc: https://github.com/nuxt-community/axios-module#usage
  '@nuxtjs/axios',
  [
    'nuxt-sass-resources-loader',
    [
      '@/assets/scss/common/globals.scss',
    ]
  ]
],

router: {
  // middleware: 'i18n'
  linkExactActiveClass: 'active',
  middleware: 'pages'
},
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
  postcss: {
    plugins: {
      cssnano: {
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true
            }
          }
        ]
      }
    }
  },
  optimizeCSS: {
    cssProcessor: require('css-mqpacker'),
    cssProcessorPluginOptions: { sort: true }
  },
  plugins: [
  new webpack.ProvidePlugin({
    // global modules
    '$': 'jquery',
    '_': 'lodash',
    optimization: {
      minimizer: [new UglifyJsPlugin()],
    },
  })
]
},
  generate: {
    routes: ['/','whatsapp-api']
  }

}
