import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'
import { lightTheme, darkTheme } from './plugins/theme'
import App from './App.vue'
import router from './router'
const app = createApp(App)
const vuetify = createVuetify({
    blueprint: md3,
    theme: {
        defaultTheme: 'lightTheme',
        themes: {
            lightTheme,
            darkTheme
        }
    }
})

app.use(router)
app.use(vuetify)
app.mount('#app')

export { vuetify }