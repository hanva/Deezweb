import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter) // On enregistre le plugin dans Vue

import Home from '@/components/Home.vue'
import List from '@/components/List.vue'
import Favs from '@/components/Favs.vue'



const router = new VueRouter({
  routes: [
    // Configuration des routes de l'application
    { name: 'home', path: '/', component: Home },
    { name: 'list', path: '/list', component: List },
    { name: 'favs', path: '/favs', component: Favs }

  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
