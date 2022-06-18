import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const opts = {
    theme: {
        dark: false,
        default: 'light',
        disable: false,
        options: {
          cspNonce: undefined,
          customProperties: undefined,
          minifyTheme: undefined,
          themeCache: undefined,
        },
        themes: {
          light: {
            primary: '#0054FC',
            secondary: '#FA6400',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00',
            white: '#ffffff',
            primary_app:'#E89A43',
            secondary_app: '#500617',
          },
          dark: {
            primary: '#2196F3',
            secondary: '#424242',
            accent: '#FF4081',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00',
          },
        },
      },
}

export default new Vuetify(opts)