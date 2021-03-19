<template>
	<nav>
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
	nav {
		position: relative;
		margin: 20px 0;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}

	.link {
		text-decoration: none;
		margin: 0 1em;
		font-size: 1.5em;
		padding: 0.5em;
		transition: all 200ms ease-in-out;
		user-select: none;
	}

	.hamburger {
		display: none;

		div {
			width: 40px;
			height: 5px;
			margin: 10px;
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
			position: absolute;
			z-index: 100;
			margin-top: 0;
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
