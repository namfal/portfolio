import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMoon, faSun, faPause, faPlay, faLink, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faMoon, faSun, faPause, faPlay, faLink, faArrowRight, faGithub)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueRouter)


Vue.config.productionTip = false

document.title = "Nami Falhan | Portfolio"

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
