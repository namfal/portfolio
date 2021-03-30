<template>
	<div class="container-resume">
		<ul class="highlights">
			<li v-for="highlight in resume.highlights" :key="highlight">{{highlight}}</li>
		</ul>
		<h3 class="resume-section-header">Work Experience</h3>
		<div class="experience" v-for="experience in resume.workExperience" :key="experience.key">
			<div class="experience-title">
				<h4>{{experience.workPlace}}</h4>
				<p class="experience-date">{{experience.dates}}</p>
			</div>
			<p class="experience-location">{{experience.location}} <span v-if="experience.remote" class="remote-badge">remote</span></p>
			<ul class="experience-bullets">
				<li v-for="(item, index) in experience.body" :key="experience.key + index">{{item}} </li>
			</ul>
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

		.experience-title {
			display: flex;
			justify-content: space-between;
			align-items: center;

			h4 {
				font-weight: 600;
			}

			p {
				display: block;
				font-size: 1.2em;
				font-weight: 300;
			}
		}

		.experience-location {
			font-size: 1.2em;
			font-weight: 300;
		}

		.experience-bullets {
			margin: 20px 0 0 20px;

			li {
				padding: 4px 0;
				list-style: circle;
			}
		}

		.remote-badge {
			display: none;
			font-size: 16px;
			padding: 0 1em;
			border-radius: 20px;
			opacity: 0.4;
		}
	}

	@media screen and (max-width: 800px){
		.experience-title {
			flex-direction: column;

			h4 {
				text-align: center;
			}
		}

		.experience-location {
			text-align: center;
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
