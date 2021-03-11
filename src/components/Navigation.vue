<template>
	<nav class="navigation">
		<router-link :to="{ name: 'Home' }" exact class="link">Home</router-link>
		<router-link :to="{ name: 'Resume' }" class="link">Resume</router-link>
		<router-link :to="{ name: 'Projects' }" class="link">Projects</router-link>
	</nav>
</template>

<script>
export default {
	name: 'Navigation'
}
</script>

<style scoped lang="less">
	@import '../styles/common';

	nav {
		position: absolute;
		top: 10px;
		right: 50px;
		z-index: 1;
	}

	.link {
		display: inline-block;
		color: white;
		text-decoration: none;
		margin: 1em;
		font-size: 1.5em;
		border: 2px solid white;
		padding: 0.5em;
		box-shadow: 4px 4px 0 0 white;
		transition: all 200ms ease-in-out;
		user-select: none;
		background-color: @midnight;

		&:hover {
			box-shadow: 0 0 0 4px @bright-turquoise;
		}
	}

	.router-link-active{
		color: @bright-turquoise;
		border-color: @bright-turquoise;
		box-shadow: 0 0 0 4px @bright-turquoise;
	}

	@media screen and (max-width: 900px){
		.link {
			font-size: 1.2em;
		}
	}

</style>
