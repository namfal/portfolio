import VueRouter from 'vue-router'
import Home from './views/Home'
import Resume from './views/Resume'
import TempCanvas from './views/TempCanvas'

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
	},
	{
		path: '/canvas',
		name: 'Canvas',
		component: TempCanvas
	}
]

const router = new VueRouter({ mode: 'history', routes })

export default router
