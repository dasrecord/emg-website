// import './main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Load timeline.js
const script = document.createElement('script')
script.src = '/timeline.js'
script.onload = () => {
    // Mount the app after timeline.js is loaded
    app.mount('#app')
}
script.onerror = (error) => {
    // Log any errors that occur when the script is loaded
    console.error('Error loading timeline.js:', error)
}
document.body.appendChild(script)