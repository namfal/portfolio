<template>
	<footer>
		<div :class="[{'invisible': $route.name !== 'Home'}, 'controls-container']" @click="$emit('toggle-animation')">
			<button v-if="animationPaused">
				<font-awesome-icon  :icon="['fas', 'play']" class="icon"></font-awesome-icon>
			</button>
			<button v-else>
				<font-awesome-icon :icon="['fas', 'pause']" class="icon"></font-awesome-icon>
			</button>
		</div>
		<div class="links-container">
			<a href="https://www.linkedin.com/in/namifalhan/" target="_blank" title="LinkedIn">
				<!-- Use Font Awesome icons as svgs to avoid Ad Blocker's wrath -->
				<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" class="svg-inline--fa fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
			</a>
			<a href="http://github.com/namfal" target="_blank" title="GitHub">
				<!-- Use Font Awesome icons as svgs to avoid Ad Blocker's wrath -->
				<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github-square" class="svg-inline--fa fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"></path></svg>
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
	footer {
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
		position: relative;
		padding: 0 20px;
	}

	.links-container, .controls-container {
		border-radius: 20px;
		transition: all 100ms ease;
		-webkit-backdrop-filter: blur(4px);
		backdrop-filter: blur(4px);
	}

	.controls-container.invisible {
		visibility: hidden;
	}

	.controls-container button {
		background-color: transparent;

		&:hover {
			cursor: pointer;
		}
	}

	.controls-container .icon {
		font-size: 2.4em;
	}

	.links-container svg {
		height: 2.4em;
		width: 2.4em;
	}

	.controls-container .icon,
	.links-container svg {
		margin: 14px;
	}

	@media screen and (max-width: 400px){
		.controls-container .icon {
			font-size: 2em;
		}

		.links-container svg {
			height: 2em;
			width: 2em;
		}
	}

	@media screen and (max-width: 300px){
		.controls-container .icon {
			font-size: 1.6em;
		}

		.links-container svg {
			height: 1.6em;
			width: 1.6em;
		}
	}
</style>
