<template>
	<div class="intro-container">
		<img class="pic" src="../assets/nami-pic.jpeg" alt="profile-picture">
		<p class="bio">
			When I was a toddler, I took apart my parents’ bedside lamp and was tinkering with it. My questionable choice for toys aside, I was born to take things apart and put them back together (failed attempts count too!). Now, I tinker with web apps instead and my main tool is JS. I love React and Vue and I am looking for a small-mid sized company to code remotely!
		</p>
	</div>
</template>

<script>
export default {
	name: "Intro"
}
</script>

<style scoped lang="less">
	.intro-container {
		width: 70%;
		height: 80%;
		max-width: 800px;
		max-height: 600px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: relative;
	}

	.bio {
		border-radius: 20px;
		overflow: scroll;
		font-size: 1.4em;
		padding: 2em;
		line-height: 1.3em;
		z-index: 3;
		text-align: left;
		background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.4));
		-webkit-backdrop-filter: blur(4px);
		backdrop-filter: blur(4px);
		box-shadow: 0 0 20px 4px rgba(255, 255, 255, 0.4);
		margin-top: 300px;
	}

	.pic {
		height: 300px;
		min-height: 175px;
		clip-path: circle(40%);
		position: absolute;
		top: 100px;
		left: -150px;
		transform: scaleX(-1);
		z-index: 2;
	}

	@media screen and (max-width: 900px) {
		.bio {
			font-size: 1.2em;
			margin-top: 0;
			padding: 1em;
		}

		.pic {
			position: relative;
			top: unset;
			left: unset;
			height: 40vw;
			align-self: unset;
		}
	}
</style>
