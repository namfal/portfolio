<template>
	<div class="scene">
		<div :class="[{ 'flipped': cardFlipped}, 'card']">
			<div class="front" @click="flipCard">
				<img :src="require(`@/assets/${fileName}`)" alt="Screenshots of a project I worked on">
				<h4>{{title}}</h4>
				<div class="see-more"> See More <span class="arrow"><font-awesome-icon  :icon="['fas', 'arrow-right']" class="icon"></font-awesome-icon></span> </div>
			</div>
			<div class="back">
				<img :src="require(`@/assets/${fileName}`)" alt="Screenshots of a project I worked on">
				<h4>{{title}}</h4>
				<p class="tech-stack">{{techStack}}</p>
				<hr/>
				<a :href="link" target="_blank"><font-awesome-icon  :icon="['fas', 'link']" class="icon"></font-awesome-icon> Live Demo</a>
				<a :href="github" target="_blank" v-if="github"><font-awesome-icon  :icon="['fab', 'github']" class="icon"></font-awesome-icon> Github</a>
				<p>{{text}}</p>
				<button @click="flipCard">Close</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FlipCard',
	props: ['fileName', 'title', 'text', 'techStack', 'link', 'github'],
	data () {
		return {
			cardFlipped: false
		}
	},
	methods: {
		flipCard () {
			this.cardFlipped = !this.cardFlipped
		}
	}
}
</script>

<style scoped lang="less">
	.scene {
		width: 350px;
		height: 350px;
		perspective: 600px;
		padding: 50px;
	}

	.card {
		width: 100%;
		height: 100%;
		position: relative;
		transform-style: preserve-3d;
		transition: transform 1s;
		border-radius: 20px;
	}

	.card.flipped {
		transform: rotateY(180deg);
	}

	.front, .back {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		border-radius: 20px;
		overflow: scroll;

		img {
			width: 100%;
			align-self: flex-start;
		}

		h4 {
			margin: 10px;
		}
	}

	.front {
		display: flex;
		justify-content: space-between;
		flex-direction: column;

		.see-more {
			align-self: flex-end;
			margin: 10px 20px;

			.arrow {
				display: inline-block;
				transition: transform 200ms ease-in-out;
			}
		}

		&:hover {
			cursor: pointer;

			.arrow {
				transform: translateX(10px);
			}
		}
	}

	.back {
		transform: rotateY(180deg);

		p, button, a {
			margin: 10px;
		}

		.tech-stack {
			font-size: 1em;
			border: 1px solid;
			display: inline-block;
			padding: 5px;
			border-radius: 8px;
			margin: 5px 10px;
		}

		a, a:active, a:visited {
			color: #000;
			text-decoration: none;

			&:hover {
				color: rebeccapurple;
			}
		}

		button {
			margin: 20px auto;
			display: block;
			padding: 10px;
			background-color: white;
			border: 2px solid black;
			border-radius: 8px;
			font-weight: 600;
			transition: all 100ms ease-in-out;

			&:hover {
				background-color: black;
				color: white;
			}
		}
	}

	@media screen and (min-width: 1000px){
		.scene {
			width: 550px;
			height: 450px;
		}
	}
</style>
