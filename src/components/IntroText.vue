<template>
	<div class="bio-text-container">
		<img class="pic" src="../assets/nami-pic.jpeg" alt="profile-picture">
		<p class="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus viverra vitae congue eu consequat ac. Lectus sit amet est placerat in egestas erat. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada.</p>
	</div>
</template>

<script>
export default {
	name: "IntroText"
}
</script>

<style scoped lang="less">
	.bio-text-container {
		height: 50vh;
		width: 50vw;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		flex-direction: column;
	}

	.bio {
		border-radius: 20px;
		width: 50vw;
		font-size: 1.4em;
		padding: 2em;
		line-height: 1.3em;
		z-index: 3;
		text-align: left;
		background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.4));
		-webkit-backdrop-filter: blur(4px);
		backdrop-filter: blur(4px);
		box-shadow: 0 0 20px 4px rgba(255, 255, 255, 0.4);
	}

	.pic {
		height: 350px;
		clip-path: circle(40%);
		position: absolute;
		top: -150px;
		left: -200px;
		transform: scaleX(-1);
		z-index: 2;
	}

	@media screen and (max-width: 900px){
		.bio-text-container {
			height: 85vh;
			justify-content: space-around;
		}

		.bio {
			font-size: 1.2em;
			padding: 1em;
			overflow: scroll;
		}

		.pic {
			position: relative;
			top: unset;
			left: unset;
			height: 40vw;
		}
	}
</style>
