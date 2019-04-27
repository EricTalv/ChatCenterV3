const pkg = require('./package')


module.exports = {
    mode: 'spa',
    env: {},
    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: pkg.description}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons'},
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},

    /*
    ** Global CSS
    */
    css: [
        '@/assets/css/g-style.css',
        'vuetify/dist/vuetify.min.css',
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '@/plugins/api',
        '@/plugins/infScroll',
        '@/plugins/vuetify',
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        // Doc: https://bootstrap-vue.js.org/docs/
        'bootstrap-vue/nuxt',
        '@nuxtjs/pwa',
    ],
    /*
    ** Axios module configuration
    */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
        baseURL: 'http://192.168.99.100:8080/api/'
    },

    /*
    * Nuxt auth configuration
    * */
    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: 'login',
                        method: 'post',
                        propertyName: 'token'
                    },
                    user: {
                        url: 'user',
                        method: 'get',
                        propertyName: 'data'
                    },
                    logout: {
                        url: 'logout',
                        method: 'get'
                    }
                }
            }
        }
    },

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {

        }
    }
}
