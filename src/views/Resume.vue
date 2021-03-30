<template>
	<div class="container-resume">
		<ul class="highlights">
			<li v-for="highlight in resume.highlights" :key="highlight">{{highlight}}</li>
		</ul>
		<h3 class="resume-section-header">Work Experience</h3>
		<div class="experience" v-for="experience in resume.workExperience" :key="experience.key">
			<div class="experience-info">
				<h4>{{experience.workPlace}}</h4>
				<p class="experience-date">{{experience.dates}}</p>
			</div>
			<div class="experience-info">
				<p class="experience-location">{{experience.location}}</p>
				<p v-if="experience.remote" class="remote-badge">remote</p>
			</div>
			<ul class="experience-bullets">
				<li v-for="(item, index) in experience.body" :key="experience.key + index">{{item}} </li>
			</ul>
		</div>
		<h3 class="resume-section-header">Education</h3>
		<div class="experience">
			<div class="experience-info">
				<h4>{{resume.education.degree}}</h4>
				<p class="experience-date">{{resume.education.dates}}</p>
			</div>
			<div class="experience-info">
				<p class="experience-location">{{resume.education.school}} | {{resume.education.location}}</p>
			</div>
			<ul class="experience-bullets">
				<li>Honors: {{resume.education.honors}} </li>
				<li>Thesis: {{resume.education.thesis}} </li>
			</ul>
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

		.experience-info {
			display: flex;
			justify-content: space-between;
			align-items: center;

			h4 {
				font-weight: 600;
			}

			.remote-badge {
				font-size: 1em;
				padding: 0 1em;
				margin: 0.5em 0;
				border-radius: 20px;
				opacity: 0.4;
			}

			.experience-location,
			.experience-date {
				font-size: 1.2em;
				font-weight: 300;
			}
		}

		.experience-bullets {
			margin: 20px 0 0 20px;

			li {
				padding: 4px 0;
				list-style: circle;
			}
		}
	}

	@media screen and (max-width: 800px){
		.experience-info {
			flex-direction: column;

			h4 {
				text-align: center;
			}
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
