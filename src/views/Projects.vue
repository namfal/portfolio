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
		<FlipCard
				fileName="roomreports.png"
				title="Room Reports"
				link="http://www.roomreports.io/home"
				text="A project I started to familiarize myself with this particular dev stack and deploying to Heroku. This project ended up being much bigger than I initially though and so it is still a WIP. Since this app is on the free heroku tier, it might be slow to load."
				techStack="MEVN App"
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
