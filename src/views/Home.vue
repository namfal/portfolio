<template>
	<div class="container">
		<Circles></Circles>
	</div>
</template>

<script>
import Circles from '../components/Circles.vue'

export default {
	name: "Home",
	components: {
		Circles
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
