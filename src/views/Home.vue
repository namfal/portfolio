<template>
	<div class="container-home">
		<Canvas :animation="animationPaused" :darkTheme="darkTheme"></Canvas>
		<img class="pic" src="../assets/nami.jpeg" alt="Picture of me">
		<p class="text">
			Hi 👋 I am Nami and I am a Frontend Developer 👨‍💻 When I was a toddler, I took apart my parents’ bedside lamp and was tinkering with it. My questionable choice for toys aside, I was born to take things apart and put them back together - and yes, failed attempts count too! Now, I tinker with web apps instead and my main tool is JS. I love developing with React and Vue, and working with small teams!
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
		max-height: 300px;
		width: auto;
		border-radius: 50%;
	}

	.text {
		height: auto;
		width: 80%;
		max-width: 700px;
		padding: 0.8em;
		overflow: scroll;
		border-radius: 20px;
		-webkit-backdrop-filter: blur(4px);
		backdrop-filter: blur(4px);
	}

	@media screen and (max-height: 400px) {
		.pic {
			display: none;
		}
	}
</style>
