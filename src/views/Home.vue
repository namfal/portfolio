<template>
	<div class="container-home">
		<Canvas></Canvas>
		<Intro />
		<div class="footer"></div>
	</div>
</template>

<script>
import Canvas from '../components/Canvas'
import Intro from '../components/Intro'

export default {
	name: "Home",
	components: {
		Canvas,
		Intro
	}
}
</script>

<style scoped lang="less">
	.container-home {
		height: calc(100vh - 48px - 20px);
		width: 100vw;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
	}

	.footer {
		height: 100px;
		width: 100%;
		background-color: #fff;
		z-index: 2;
	}

	@media screen and (max-width: 370px) {
		.container-home {
			height: 100vh;
		}
	}
</style>
