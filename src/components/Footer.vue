<template>
	<footer>
		<div class="controls" @click="$emit('toggle-animation')">
			<button v-if="animationPaused"><unicon name="play"/></button>
			<button v-else><unicon name="pause"/></button>
		</div>
		<div class="links">
			<a href="https://www.linkedin.com/in/namifalhan/" target="_blank" title="LinkedIn"><unicon name="linkedin"/></a>
			<a href="http://github.com/namfal" target="_blank" title="GitHub"><unicon name="github"/></a>
		</div>
		<div class="theme" @click="$emit('toggle-theme')">
			<button v-if="darkTheme"><unicon name="moon"/></button>
			<button v-else><unicon name="sun" /></button>
		</div>
	</footer>
</template>

<script>
export default {
	name: "Footer",
	props: ['animationPaused', 'darkTheme']
}
</script>

<style scoped>
	footer {
		background-color: #fff;
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
		position: relative;
		/*top: -100px;*/
	}
</style>
