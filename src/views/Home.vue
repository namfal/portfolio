<template>
	<div class="container">
		<Canvas></Canvas>
		<IntroText />
	</div>
</template>

<script>
import Canvas from '../components/Canvas'
import IntroText from '../components/IntroText'

export default {
	name: "Home",
	components: {
		Canvas,
		IntroText
	}
}
</script>

<style scoped lang="less">
	.container {
		height: 100vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
</style>
