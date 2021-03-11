<template>
	<div class="container">
		<Canvas></Canvas>
	</div>
</template>

<script>
import Canvas from '../components/Canvas'

export default {
	name: "Home",
	components: {
		Canvas
	}
}
</script>

<style scoped lang="less">
	.container {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
</style>
