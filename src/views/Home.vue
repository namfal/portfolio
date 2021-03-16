<template>
	<div class="container-home">
		<Canvas :animation="animationPaused" :darkTheme="darkTheme"></Canvas>
		<div class="pic"></div>
		<div class="text">
			<p>
				When I was a toddler, I took apart my parents’ bedside lamp and was tinkering with it. My questionable choice for toys aside, I was born to take things apart and put them back together (failed attempts count too!). Now, I tinker with web apps instead and my main tool is JS. I love React and Vue and I am looking for a small-mid sized company to code remotely!
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
		flex-direction: column;
	}

	.pic {
		height: 35vmin;
		width: 35vmin;
		max-height: 250px;
		max-width: 250px;
		z-index: 2;
		background-image: url("../assets/nami-pic.jpeg");
		background-size: cover;
		background-repeat: no-repeat;
		border-radius: 50%;
		background-position: center;
	}

	.text {
		width: 90%;
		max-height: 40vmin;
		max-width: 700px;
		font-size: 1.6em;
		z-index: 2;
		margin: 0.8em;
		padding: 0.8em;
		overflow: scroll;
		line-height: 1.3em;
		border-radius: 20px;
		box-shadow: 0 0 20px 4px rgba(255, 255, 255, 0.4);
		background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.4));
		-webkit-backdrop-filter: blur(4px);
		backdrop-filter: blur(4px);
	}

	@media screen and (max-height: 600px) {
		.pic {
			height: 14vmin;
			width: 14vmin;
		}

		.text {
			font-size: 1.4em;
			max-height: 33vmin;
		}
	}

	@media screen and (max-height: 315px) {
		.pic {
			display: none;
		}
	}

	@media screen and (max-width: 300px) {
		.text {
			font-size: 1.2em;
		}
	}
</style>
