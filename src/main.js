import { createApp, h } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import App from './App.vue'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Shipping from './components/Shipping.vue'
import Returns from './components/Returns.vue'
import Contact from './components/Contact.vue'


const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/shipping', name: 'Shipping', component: Shipping },
    { path: '/returns', name: 'Returns', component: Returns },
    { path: '/contact', name: 'Contact', component: Contact },
  ]
  
const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})

const app = createApp(
    {render: () => h(App)}
);
app.use(router);
app.mount("#app");

//createApp(App).mount('#app')
