<template>
	<div class="container-resume">
		<ul class="highlights">
			<li v-for="highlight in resume.highlights" :key="highlight">{{highlight}}</li>
		</ul>
		<h3>Work Experience</h3>
			<div v-for="experience in resume.workExperience" :key="experience.key">
				<h4>{{experience.workPlace}}</h4>
				<ul>
					<li v-for="(item, index) in experience.body" :key="experience.key + index">{{item}} </li>
				</ul>
			</div>
		<h3>Education</h3>
			<div>
				{{resume.education.degree}}
			</div>
	</div>
</template>

<script>
import Resume from '../resume.json'

export default {
	name: 'Resume.vue',
	data () {
		return {
			resume: Resume
		}
	}
}
</script>

<style scoped>
	.container-resume {
		height: 100%;
		width: 100%;
		overflow: scroll;
		padding: 10%;
	}

	.highlights {
		width: 100%;
		overflow: scroll;
		padding: 1em;
	}

	.highlights li {
		font-size: 1.2em;
		display: inline;
		padding: 0 1em;
		margin: 0 0.5em;
		border-radius: 20px;
		font-weight: 600;
	}

	@media screen and (max-width: 700px){
		.container-resume {
			font-size: 1.2em;
		}
	}

	@media screen and (max-width: 370px){
		.container-resume {
			margin-top: 50px;
			height: calc(100% - 50px);
			padding: 0 2em;
		}
	}
</style>
