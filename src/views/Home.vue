<template>
	<div class="container-home">
		<Canvas :animation="animationPaused" :darkTheme="darkTheme"></Canvas>
		<div class="pic-container">
			<img src="../assets/nami.jpeg" alt="Picture of me">
		</div>
		<div class="text-container">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>

		</div>
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
		justify-content: center;
		align-items: center;
		flex-direction: row;
		position: relative;
		flex-wrap: wrap;
	}

	.pic-container, .text-container {
		width: 100%;
		height: 20%;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.pic-container {
		height: 20%;
	}

	.text-container {
		height: 80%;
	}

	.pic-container img {
		height: 100%;
		max-height: 90vw;
		position: absolute;

		border-radius: 50%;
		padding: 5px;
	}

	.text-container p {
		width: 80%;
		max-height: 90%;
		max-width: 700px;
		position: absolute;

		font-size: 1.6em;
		z-index: 2;
		margin: 0.8em;
		padding: 0.8em;
		overflow: scroll;
		line-height: 1.3em;
		border-radius: 20px;
		-webkit-backdrop-filter: blur(4px);
		backdrop-filter: blur(4px);
	}

	@media screen and (min-width: 700px) {
		.container-home {
			padding: 5% 0;
		}
	}

	@media screen and (max-width: 370px), (max-height: 530px) {
		.text-container p {
			font-size: 1.4em;
		}

		.pic-container {
			height: 30%;
		}

		.text-container {
			height: 60%;
		}
	}
</style>
