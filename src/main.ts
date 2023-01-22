import { createApp } from 'vue'
import './assets/css/main.css'
import App from './App.vue'
import router from './router'
import defaultLayout from './layout/default.vue'

const app = createApp(App)
app.use(router).mount('#app')
app.component('default-layout', defaultLayout)
