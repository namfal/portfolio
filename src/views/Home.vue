<template>
	<div class="container-home">
		<Canvas></Canvas>
		<div class="intro">
			<img class="pic" src="../assets/nami-pic.jpeg" alt="profile-picture">
			<p class="bio">
				When I was a toddler, I took apart my parents’ bedside lamp and was tinkering with it. My questionable choice for toys aside, I was born to take things apart and put them back together (failed attempts count too!). Now, I tinker with web apps instead and my main tool is JS. I love React and Vue and I am looking for a small-mid sized company to code remotely!
			</p>
		</div>
		<div class="footer">
			<div class="controls" @click="paused = !paused">
				<unicon name="play" v-if="paused"/>
				<unicon name="pause" v-else/>
			</div>
			<div class="links">
				<a href="https://www.linkedin.com/in/namifalhan/" target="_blank" title="LinkedIn"><unicon name="linkedin"/></a>
				<a href="http://github.com/namfal" target="_blank" title="GitHub"><unicon name="github"/></a>
			</div>
			<div class="theme" @click="darkTheme = !darkTheme">
				<unicon name="moon" v-if="darkTheme"/>
				<unicon name="sun" v-else/>
			</div>
		</div>
	</div>
</template>

<script>
import Canvas from '../components/Canvas'

export default {
	name: "Home",
	components: {
		Canvas
	},
	data () {
		return {
			paused: false,
			darkTheme: true
		}
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

	.intro {
		width: 80vw;
		height: 75vh;
		max-width: 800px;
		max-height: 700px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
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
	}

	.pic {
		height: 50vw;
		max-height: 350px;
		min-height: 175px;
		clip-path: circle(40%);
		z-index: 2;
	}

	.footer {
		height: 100px;
		width: 100%;
		background-color: #fff;
		z-index: 2;
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
	}

	@media screen and (max-width: 700px) {
		.bio {
			padding: 1em;
		}
	}

	@media screen and (max-width: 370px) {
		.container-home {
			height: 100vh;
		}
	}
</style>
