<template>
	<div id="app">
		<Navigation />
		<router-view />
	</div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
	name: 'App',
	components: {
		Navigation
	}
}
</script>

<style>
	* {
		border: none;
		outline: none;
		padding: 0;
		margin: 0;
	}

	html, body {
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		position: fixed;
		font-family: 'Inter', sans-serif;
	}

	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background-color: #001E32;
		height: 100vh;
		width: 100vw;
		overflow-x: hidden;
		overflow-y: hidden;
	}

	body.dark #app {
		background-color: #001E32;
	}

	body.light #app {
		background-color: #d2ecff;
	}

</style>
