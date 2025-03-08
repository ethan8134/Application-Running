import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerPlugins } from '@/plugins'
import App from './App.vue'

const app = createApp(App)

registerPlugins(app)
app.use(createPinia())

app.mount('#app')
