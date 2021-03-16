<template>
	<footer>
		<div class="controls" @click="$emit('toggle-animation')">
			<unicon name="play" v-if="animationPaused"/>
			<unicon name="pause" v-else/>
		</div>
		<div class="links">
			<a href="https://www.linkedin.com/in/namifalhan/" target="_blank" title="LinkedIn"><unicon name="linkedin"/></a>
			<a href="http://github.com/namfal" target="_blank" title="GitHub"><unicon name="github"/></a>
		</div>
		<div class="theme" @click="$emit('toggle-theme')">
			<unicon name="moon" v-if="darkTheme"/>
			<unicon name="sun" v-else/>
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
		height: 100px;
		width: 100%;
		background-color: #fff;
		position: relative;
		z-index: 2;
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
