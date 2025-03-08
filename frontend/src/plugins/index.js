import vuetify from './vuetify.js'
import router from '@/router/index.js'

export function registerPlugins(app) {
  app
    .use(vuetify)
    .use(router)
}
