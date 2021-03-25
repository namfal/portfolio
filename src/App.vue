<template>
	<div id="app" :class="darkTheme ? 'dark' : 'light'">
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
	},
	created () {
		this.darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
	}
}
</script>

<style lang="less">
	@import "./styles/dark-theme.less";
	@import "./styles/light-theme.less";

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
		flex: 0 0 90px;
		width: 100%;
		z-index: 2;
	}

	main {
		/*flex: 0 0 auto; Doesnt work in Safari, use height: 100% instead or uncomment this and set height/flex-basis to 0 */
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	h3 {
		font-size: 1.8em;
	}

	h4 {
		font-size: 1.5em;
	}

	p, li {
		font-size: 1.4em;
		line-height: 1.3em;
	}

</style>
