<template>
	<div ref="container" class="container-canvas">
	</div>
</template>

<script>
import Raphael from '../libs/raphael.js'
import svgs from '../assets/svgs.js'
import { throttle } from 'lodash'

export default {
	name: 'Canvas',
	props: {
		animation: Boolean,
		darkTheme: Boolean
	},
	data () {
		return {
			width: window.innerWidth,
			height: window.innerHeight
		}
	},
	mounted () {
		this.$nextTick(() => {
			window.addEventListener('resize', throttle(this.onResize, 500))
		})

		this.redrawPatterns()
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.onResize)
	},
	watch: {
		animation: function () {
			if (this.animation) this.paperSet.pause()
			else if (!this.animation) this.paperSet.resume()
		},
		darkTheme: function () {
			this.paperSet.attr({
				fill: this.darkTheme ? '#001E32' : '#d2ecff'
			})
		}
	},
	methods: {
		getRandomNumber (lowerLimit, upperLimit) {
			const min = Math.ceil(lowerLimit)
			const max = Math.floor(upperLimit)
			return Math.floor(Math.random() * (max - min + 1) + min)
		},
		pickBetweenTwo (num1, num2) {
			return (this.getRandomNumber(0, 2) % 2) === 0 ? num1 : num2
		},
		getTranslationCoordinates (x, y) {
			const heightOrWidth = this.pickBetweenTwo(this.width, this.height)
			let num1, num2

			if (heightOrWidth === this.width) {
				num1 = this.pickBetweenTwo(0, this.width)
				num2 = this.getRandomNumber(0, this.height)
			}  else {
				num1 = this.getRandomNumber(0, this.width)
				num2 = this.pickBetweenTwo(0, this.height)
			}

			return {
				translateX: num1 - x,
				translateY: num2 - y
			}
		},
		onResize () {
			this.width = window.innerWidth
			this.height = window.innerHeight
			this.redrawPatterns()
		},
		drawPatterns () {
			const colors = ['#fff', '#42aab4', '#bd7a96', '#7896c5', '#cb8f5d']
			const count = Math.min(Math.ceil(Math.max(this.width, this.height) / 20), 80)
			this.paper.setStart()
			for (let i = 0; i < count; i++) {
				const path = svgs[this.getRandomNumber(0, svgs.length - 1)]
				const color = colors[this.getRandomNumber(0, colors.length - 1)]
				const x = this.getRandomNumber(0, this.width)
				const y = this.getRandomNumber(0, this.height)
				const rotation = this.getRandomNumber(0,360)
				const { translateX, translateY } = this.getTranslationCoordinates(x, y)
				const scaleValue = Math.min(this.width/5000, 0.1)
				const animation = Raphael.animation(
					{
						0.5: {transform: `...T${translateX},${translateY}`},
						1: {transform: `...T${-translateX},${-translateY}`}
					},
					this.getRandomNumber(200000,600000),
					'linear')
					.repeat(Infinity)

				this.paper.path(path)
					.attr({
						stroke: color,
						fill: '#001E32',
						'stroke-width': 1
					})
					.translate(x, y)
					.scale(scaleValue, scaleValue, 0, 0)
					.rotate(rotation)
					.animate(animation)
			}
			this.paperSet = this.paper.setFinish()
		},
		redrawPatterns () {
			if (this.paper) this.paper.remove()
			this.paper = new Raphael(this.$refs.container, this.width, this.height)
			this.drawPatterns()
		}
	}
}
</script>

<style scoped>
	.container-canvas {
		width: 100vw;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
</style>

