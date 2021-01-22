<template>
    <div ref="container" class="container">
    </div>
</template>

<script>
    import Raphael from '../libs/raphael.js'
    import svgs from '../assets/svgs.js'

    export default {
        name: 'Canvas',
        data () {
            return {
                width: window.innerWidth,
                height: window.innerHeight
            }
        },
        mounted () {
            this.$nextTick(() => {
                window.addEventListener('resize', this.onResize)
            })

            this.redrawPatterns()
        },
        methods: {
            getRandomNumber (lowerLimit, upperLimit) {
                let min = Math.ceil(lowerLimit)
                let max = Math.floor(upperLimit)
                return Math.floor(Math.random() * (max - min + 1) + min)
            },
            onResize () {
                this.width = window.innerWidth
                this.height = window.innerHeight
                this.redrawPatterns()
            },
            drawPatterns () {
                let colors = ['#fff', '#42aab4', '#bd7a96', '#7896c5', '#cb8f5d']
                let count = Math.ceil(Math.max(this.width, this.height) / 10)

                for (let i = 0; i < count; i++) {
                    let path = svgs[this.getRandomNumber(0, svgs.length - 1)]
                    let color = colors[this.getRandomNumber(0, colors.length - 1)]
                    let x = this.getRandomNumber(0, this.width)
                    let y = this.getRandomNumber(0, this.height)
                    let rotation = this.getRandomNumber(0,360)


                    this.paper.path(path)
                        .attr({
                            stroke: color,
                            fill: '#001E32',
                            'stroke-width': 1
                        })
                        .translate(x, y)
                        .rotate(rotation)
                        .scale(0.1, 0.1, 0, 0)
                        .glow({color: color, width: 5, offsetx: 6, offsety: 6, opacity: 0.2})

                }
            },
            redrawPatterns () {
                if (this.paper) this.paper.remove()
                this.paper = new Raphael(this.$refs.container, this.width, this.height);
                this.drawPatterns()
            }
        }
    }
</script>

<style scoped>

</style>


//     filter: drop-shadow(4px 4px 6px white);

// let moveDiagonalAnim = Raphael.animation({transform: "t0,0s0.1,0.1t100,100"}, 100, 'linear', () => console.log(el))
// let moveDiagonalAnimGlow = Raphael.animation({transform: "t0,0t106,106"}, 100, 'linear', () => console.log(el))
// let el = paper.path(leftCurlyPath)
//     .attr({
//         stroke: 'white',
//         'stroke-width': 1,
//         fill: '#001E32'
//     })
//     .translate(0, 0)
//     .scale(0.1, 0.1, 0, 0)
//     .animate(moveDiagonalAnim)
//     .glow({ color: 'white', width: 5, offsetx: 6, offsety: 6, opacity: 0.2})
//     .animate(moveDiagonalAnimGlow)