<template>
	<div class="container-projects">
		<div :class="[{'shown' : showBlur}, 'blur']" @click="e => close()"></div>
		<div class="card" @click="e => expand(e)">
			<div class="card-child">
				<div class="front-content">
					<img src="../assets/crypto-watch.png" alt="">
					<h4>Crypto Watch</h4>
				</div>
				<div class="backside-content">
					Reverse Content
					<button @click.stop="e => close(e.target.parentNode.parentNode)">Close</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Projects',
	data () {
		return {
			showBlur: false,
			currentlyOpenCard: null
		}
	},
	methods: {
		viewportPercentage (percentage) {
			return {width: window.innerWidth * percentage / 100, height: window.innerHeight * percentage / 100}
		},
		expand (e) {
			if (this.showBlur) return
			const {x, y} = e.target.parentNode.getBoundingClientRect()
			const { width, height } = this.viewportPercentage(70)
			const translateX = (window.innerWidth / 2) - x - (width / 2)
			const translateY = (window.innerHeight / 2) - y - (height / 2)
			e.target.parentNode.classList.toggle('expanded')
			e.target.style.transform = `translate(${translateX}px, ${translateY}px) rotateY(180deg)`
			this.showBlur = true
			this.currentlyOpenCard = e.target
		},
		close (element = this.currentlyOpenCard) {
			element.parentNode.classList.toggle('expanded')
			element.style.transform = `rotateY(0deg) translate(0px, 0px)`
			this.showBlur = false
			this.currentlyOpenCard = null
		}
	}
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

	.card {
		width: 250px;
		height: 300px;
		background-color: #2cd3c2;
		margin: 30px;
		position: relative;

		.card-child {
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			transition: all 500ms linear;

			.backside-content {
				display: none;
			}

			.front-content {
				height: 100%;
				overflow: hidden;
				pointer-events: none;

				img {
					height: 70%;
				}
			}
		}

		&.expanded {
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: transparent;

			.card-child {
				position: absolute;
				top: 0;
				left: 0;
				width: 70vw;
				height: 70vh;
				pointer-events: auto;
				background-color: white;
				overflow: scroll;
				z-index: 4;

				.backside-content {
					display: unset;
					transform: rotateY(180deg);
					position: absolute;
					top: 0;
					right: 0;
				}

				.front-content {
					display: none;
				}
			}
		}
	}

	.blur {
		position: absolute;
		height: 100vh;
		width: 100vw;
		top: 0;
		left: 0;
		z-index: 3;
		background: linear-gradient(to bottom right, rgba(0, 8, 17, 0.64), rgba(0, 30, 50, 0.4));
		backdrop-filter: blur(5px);
		display: none;

		&.shown {
			display: unset;
		}
	}
</style>
