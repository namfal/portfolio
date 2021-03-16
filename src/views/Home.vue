<template>
	<div class="container-home">
		<Canvas :animation="animationPaused" :darkTheme="darkTheme"></Canvas>
		<img class="pic" src="../assets/nami-pic.jpeg" alt="profile-picture">
		<p class="bio">
			When I was a toddler, I took apart my parents’ bedside lamp and was tinkering with it. My questionable choice for toys aside, I was born to take things apart and put them back together (failed attempts count too!). Now, I tinker with web apps instead and my main tool is JS. I love React and Vue and I am looking for a small-mid sized company to code remotely!
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
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	img, p {
		display: none;
	}
	/*
	.bio {
		max-width: 900px;
		margin: 0 0.7em;
		border-radius: 20px;
		overflow: scroll;
		font-size: 1.4em;
		padding: 0.8em;
		line-height: 1.3em;
		z-index: 3;
		text-align: left;
		background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.4));
		-webkit-backdrop-filter: blur(4px);
		backdrop-filter: blur(4px);
		box-shadow: 0 0 20px 4px rgba(255, 255, 255, 0.4);
	}

	.pic {
		height: 30%;
		max-height: 350px;
		min-height: 150px;
		clip-path: circle(40%);
		z-index: 2;
	}

	@media screen and (max-width: 700px) {
		.bio {
			font-size: 1.2em;
		}
	}

	@media screen and (max-height: 700px) {
		.container-home {
			justify-content: center;
		}

		.pic {
			display: none;
		}
	}

	@media screen and (max-height: 400px) {
		.bio {
			height: 80px;
		}
	}
	*/
</style>
