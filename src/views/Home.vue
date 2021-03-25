<template>
	<div class="container-home">
		<Canvas :animation="animationPaused" :darkTheme="darkTheme"></Canvas>
		<img class="pic" src="../assets/nami.jpeg" alt="Picture of me">
		<p class="text">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>
		</div>
</template>

<script>
import Canvas from '../components/Canvas'

export default {
	name: "Home",
	props: ['animationPaused', 'darkTheme'],
	components: {
		Canvas
	}
}
</script>

<style scoped lang="less">
	.container-home {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-direction: column;
	}

	.pic, .text {
		z-index: 2;
		margin: 0.8em;
	}

	.pic {
		height: 30%;
		width: auto;
		border-radius: 50%;
	}

	.text {
		height: auto;
		width: 80%;
		max-width: 700px;
		padding: 0.8em;
		overflow: scroll;
		line-height: 1.3em;
		border-radius: 20px;
		-webkit-backdrop-filter: blur(4px);
		backdrop-filter: blur(4px);
	}

	@media screen and (max-width: 370px), (max-height: 530px) {
		.pic {
			height: 40%;
		}
	}
</style>
