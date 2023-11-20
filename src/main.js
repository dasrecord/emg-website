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

// Select the node that will be observed for mutations
const targetNode = document.getElementById('app');

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            const timelineElements = document.querySelectorAll('.tl-timeline, .tl-timeline *');
            timelineElements.forEach(el => {
                el.style.fontFamily = 'Agency FB !important';
            });
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);