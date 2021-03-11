import VueRouter from 'vue-router'
import Home from './views/Home'
import Resume from './views/Resume'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/resume',
		name: 'Resume',
		component: Resume
	}
]

const router = new VueRouter({ mode: 'history', routes })

export default router
