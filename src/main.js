import { createApp } from 'vue'
import App from './App.vue'
// import "./css/style.css"
import router from "./routers/routers"

const app = createApp(App)

app.use(router)

app.mount('#app')