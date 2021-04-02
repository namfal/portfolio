<template>
	<div class="container-projects">
		<FlipCard
			fileName="crypto-watch.png"
			title="Crypto Watch"
			link="https://tender-bose-c576c3.netlify.app"
			text="A simple crypto currency price tracker, using Coinbase Pro's Web Hooks API to update prices in real time."
			techStack="React App"
			github="https://github.com/namfal/cryptocurrency-watch"
		>
		</FlipCard>
		<FlipCard
				fileName="portfolio-dark.png"
				title="Portfolio"
				link="https://namidev.xyz"
				text="My personal portfolio (this) website."
				techStack="Vue.JS App"
				github="https://github.com/namfal/portfolio"
		>
		</FlipCard>
	</div>
</template>

<script>
import FlipCard from '../components/FlipCard'

export default {
	name: 'Projects',
	components: { FlipCard }
}
</script>

<style scoped lang="less">
	.container-projects {
		height: 100%;
		overflow: scroll;
		display: flex;
		justify-content: space-evenly;
		align-items: flex-start;
		flex-wrap: wrap;
	}
</style>
