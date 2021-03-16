import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'
import { uniLinkedin, uniGithub, uniPause, uniPlay, uniMoon, uniSun } from 'vue-unicons/dist/icons'

Unicon.add([uniLinkedin, uniGithub, uniPause, uniPlay, uniMoon, uniSun ])

Vue.use(VueRouter)
Vue.use(Unicon, {
	height: 32,
	width: 32
})

Vue.config.productionTip = false

document.title = "Nami Falhan | Portfolio"

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
