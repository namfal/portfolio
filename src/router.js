import VueRouter from 'vue-router'
import Home from './views/Home'
import Resume from './views/Resume'
import Projects from './views/Projects'

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
		path: '/projects',
		name: 'Projects',
		component: Projects
	}
]

const router = new VueRouter({ mode: 'history', routes })

export default router
