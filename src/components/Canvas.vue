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
        beforeDestroy() {
            window.removeEventListener('resize', this.onResize);
        },
        methods: {
            getRandomNumber (lowerLimit, upperLimit) {
                let min = Math.ceil(lowerLimit)
                let max = Math.floor(upperLimit)
                return Math.floor(Math.random() * (max - min + 1) + min)
            },
            pickBetweenTwo (num1, num2) {
                return (this.getRandomNumber(0, 2) % 2) === 0 ? num1 : num2
            },
            getTranslationCoordinates (x, y) {
              let heightOrWidth = this.pickBetweenTwo(this.width, this.height)
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
                let colors = ['#fff', '#42aab4', '#bd7a96', '#7896c5', '#cb8f5d']
                let count = Math.ceil(Math.max(this.width, this.height) / 12)

                for (let i = 0; i < count; i++) {
                    let path = svgs[this.getRandomNumber(0, svgs.length - 1)]
                    let color = colors[this.getRandomNumber(0, colors.length - 1)]
                    let x = this.getRandomNumber(0, this.width)
                    let y = this.getRandomNumber(0, this.height)
                    let rotation = this.getRandomNumber(0,360)

                    let { translateX, translateY } = this.getTranslationCoordinates(x, y)
                    let animation = Raphael.animation(
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
                        .scale(0.1, 0.1, 0, 0)
                        .rotate(rotation)
                        .animate(animation)
                        .glow({color: color, width: 5, offsetx: 6, offsety: 6, opacity: 0.2})
                        .animate(animation)
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
