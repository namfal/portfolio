<template>
	<footer>
		<div class="controls-container" @click="$emit('toggle-animation')">
			<button v-if="animationPaused">
				<font-awesome-icon  :icon="['fas', 'play']" class="icon"></font-awesome-icon>
			</button>
			<button v-else>
				<font-awesome-icon :icon="['fas', 'pause']" class="icon"></font-awesome-icon>
			</button>
		</div>
		<div class="links-container">
			<a href="https://www.linkedin.com/in/namifalhan/" target="_blank" title="LinkedIn">
				<font-awesome-icon :icon="['fab', 'linkedin']" class="icon"></font-awesome-icon>
			</a>
			<a href="http://github.com/namfal" target="_blank" title="GitHub">
				<font-awesome-icon :icon="['fab', 'github-square']" class="icon"></font-awesome-icon>
			</a>
		</div>
		<div class="controls-container" @click="$emit('toggle-theme')">
			<button v-if="darkTheme">
				<font-awesome-icon :icon="['fas', 'moon']" class="icon"></font-awesome-icon>
			</button>
			<button v-else>
				<font-awesome-icon :icon="['fas', 'sun']" class="icon"></font-awesome-icon>
			</button>
		</div>
	</footer>
</template>

<script>
export default {
	name: "Footer",
	props: ['animationPaused', 'darkTheme']
}
</script>

<style scoped lang="less">
	@import '../styles/common.less';

	footer {
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
		position: relative;
	}

	.links-container, .controls-container {
		border-radius: 20px;
		transition: all 100ms ease;
		background-color: rgba(255, 255, 255, 0.3);
		-webkit-backdrop-filter: blur(4px);
		backdrop-filter: blur(4px);
	}

	.links-container {
		box-shadow: 0px 4px 20px 0 #00576e;
	}

	.controls-container {
		box-shadow: inset 13px 13px 27px #000c14,
			inset -13px -13px 27px #003050;
	}

	.controls-container:first-child {
		margin-left: 2em;
	}

	.controls-container:last-child {
		margin-right: 2em;
	}

	.controls-container button {
		background-color: transparent;
	}

	.controls-container button:hover {
		cursor: pointer;
	}

	.controls-container:hover {
		background-color: @midnight;
	}

	.controls-container:hover .icon, .icon:hover {
		color: @bright-turquoise;
	}

	.icon {
		font-size: 2.4em;
		color: @jade;
		margin: 0.4em;
	}

	@media screen and (max-width: 400px){
		.icon {
			font-size: 2em;
		}
	}

	@media screen and (max-width: 300px){
		.icon {
			font-size: 1.6em;
		}

		.controls-container:first-child {
			margin-left: 0.5em;
		}

		.controls-container:last-child {
			margin-right: 0.5em;
		}
	}
</style>
