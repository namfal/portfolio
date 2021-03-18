import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMoon, faSun, faPause, faPlay } from '@fortawesome/free-solid-svg-icons'

library.add(faMoon, faSun, faPause, faPlay)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueRouter)


Vue.config.productionTip = false

document.title = "Nami Falhan | Portfolio"

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
