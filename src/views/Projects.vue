<template>
	<div class="container-projects">
		<div class="card" v-for="num in 50" :key="num" @click.self="e => e.target.classList.toggle('expanded')">
			<div class="compact-content">
				Content
			</div>
			<div class="card-child">
				<button @click.stop="e => close(e)">Close</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Projects',
	methods: {
		close (e) {
			e.target.parentNode.parentNode.classList.toggle('expanded')
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

		.card-child {
			height: 100%;
			width: 100%;
			pointer-events: none;
			z-index: 4;

			button {
				display: none;
			}
		}

		&.expanded{
			background-color: transparent;
			display: flex;
			justify-content: center;
			align-items: center;

			.card-child {
				position: absolute;
				top: 50%;
				left: 50%;
				width: 70vw;
				height: 70vh;
				pointer-events: auto;
				background-color: white;
				overflow: scroll;
				z-index: 4;
				transform: translate(-50%, -50%);

				button {
					display: unset;
				}
			}

			&::before {
				content: '';
				height: 100vh;
				width: 100vw;
				position: absolute;
				top: 0;
				left: 0;
				z-index: 4;
				box-shadow: 0 0 20px 0 rgb(0 30 50 / 30%);
				background: linear-gradient(to bottom right, rgba(0, 8, 17, 0.64), rgba(0, 30, 50, 0.4));
				backdrop-filter: blur(5px);
			}

			.compact-content {
				display: none;
			}
		}
	}
</style>
