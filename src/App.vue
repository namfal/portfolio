<template>
	<div id="app">
		<Navigation />
		<main>
			<router-view :animationPaused="paused" :darkTheme="darkTheme"/>
		</main>
		<Footer @toggle-animation="toggleAnimation" @toggle-theme="toggleTheme" :animationPaused="paused" :darkTheme="darkTheme"/>
	</div>
</template>

<script>
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default {
	name: 'App',
	components: {
		Navigation,
		Footer
	},
	data () {
		return {
			paused: false,
			darkTheme: true
		}
	},
	watch: {
		darkTheme: function () {
			document.getElementsByTagName('body')[0].className = this.darkTheme ? 'dark' : 'light'
		}
	},
	methods: {
		toggleAnimation: function () {
			this.paused = !this.paused
		},
		toggleTheme: function () {
			this.darkTheme = !this.darkTheme
		}
	}
}
</script>

<style>
	* {
		border: none;
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	html, body {
		height: 100%;
		width: 100vw;
		overflow: hidden;
		position: fixed;
		font-family: 'Inter', sans-serif;
	}

	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background-color: #001E32;
		height: 100%;
		width: 100vw;
		overflow-x: hidden;
		overflow-y: hidden;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		align-items: center;
	}

	nav {
		flex: 0 0 0;
		width: 100%;
		z-index: 2;
	}

	footer {
		flex: 0 0 70px;
		width: 100%;
		z-index: 2;
	}

	main {
		flex: 1 1 auto;
		width: 100%;
	}

	body.dark #app {
		background-color: #001E32;
	}

	body.light #app {
		background-color: #d2ecff;
	}

</style>
