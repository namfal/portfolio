<template>
	<div class="container-resume">
		<ul class="highlights">
			<li v-for="highlight in resume.highlights" :key="highlight">{{highlight}}</li>
		</ul>
		<h3 class="resume-section-header">Work Experience</h3>
		<div class="experience" v-for="experience in resume.workExperience" :key="experience.key">
			<h4>{{experience.workPlace}}</h4>
			<p class="experience-info">{{experience.dates}} | {{experience.location}}</p>
			<ul class="experience-bullets">
				<li v-for="(item, index) in experience.body" :key="experience.key + index">{{item}} </li>
			</ul>
			<div v-if="experience.remote" class="remote-badge">remote</div>
		</div>
		<h3 class="resume-section-header">Education</h3>
		<div class="experience">
			<h4>{{resume.education.degree}}</h4>
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

<style scoped lang="less">
	.container-resume {
		height: 100%;
		width: 100%;
		overflow: scroll;
		padding: 5%;
		user-select: none;
	}

	.resume-section-header {
		margin: 40px 0;
	}

	.highlights {
		width: 100%;
		overflow: scroll;
		padding: 2em 0;
	}

	.highlights li {
		display: inline;
		padding: 0.5em;
		margin: 0 0.5em;
		border-radius: 20px;
		font-weight: 600;
	}

	.experience {
		margin: 30px 0;
		padding: 20px;
		border-radius: 30px;
		position: relative;

		h4 {
			font-weight: 600;
		}

		.experience-info {
			text-align: right;
			font-weight: 300;
		}

		.experience-bullets {
			margin-left: 20px;

			li {
				padding: 4px 0;
				list-style: circle;
			}
		}

		.remote-badge {
			position: absolute;
			right: 25px;
			top: 15px;
			padding: 0 1em;
			border-radius: 20px;
			opacity: 0.4;
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
