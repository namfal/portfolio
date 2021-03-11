<template>
	<nav class="navigation">
		<div class="hamburger" @click="expanded = !expanded">
			<div></div>
			<div></div>
			<div></div>
		</div>
		<router-link :to="{ name: 'Home' }" exact class="link" :class="{ 'expanded' : expanded}">Home</router-link>
		<router-link :to="{ name: 'Resume' }" class="link" :class="{ 'expanded' : expanded}">Resume</router-link>
		<router-link :to="{ name: 'Projects' }" class="link" :class="{ 'expanded' : expanded}">Projects</router-link>
	</nav>
</template>

<script>
export default {
	name: 'Navigation',
	data () {
		return {
			expanded: false
		}
	}
}
</script>

<style scoped lang="less">
	@import '../styles/common';

	nav {
		width: 100%;
		position: absolute;
		top: 20px;
		z-index: 3;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}

	.link {
		color: white;
		text-decoration: none;
		margin: 0 1em;
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

	.hamburger {
		display: none;

		div {
			width: 40px;
			height: 6px;
			margin: 10px;
			background-color: white;
			border-radius: 8px;
		}
	}

	@media screen and (max-width: 900px){
		nav {
			justify-content: center;
		}

		.link {
			font-size: 1.2em;
		}
	}

	@media screen and (max-width: 370px){
		nav {
			flex-direction: column;
			align-items: flex-end;
		}

		.hamburger {
			display: unset;
		}

		.link {
			transform: translateX(150px);
			margin: 0.5em;
		}

		.link.expanded {
			transform: translateX(0px);
		}
	}

</style>
