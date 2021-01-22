<template>
    <div ref="container" class="container">
    </div>
</template>

<script>
    import Raphael from '../libs/raphael.js'

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
                let leftCurlyPath = 'M0,281.217l0,-62.434c18.904,-0.174 33.125,-5.767 42.664,-16.78c9.539,-11.013 14.308,-35.77 14.308,-74.271c-0,-29.31 1.084,-51.032 3.252,-65.167c2.168,-14.135 7.414,-25.971 15.739,-35.51c8.324,-9.539 19.077,-16.432 32.258,-20.681c13.18,-4.249 31.824,-6.374 55.931,-6.374l13.788,0l-0,62.175c-25.148,-0 -40.193,2.601 -45.136,7.804c-4.942,5.203 -7.587,15.349 -7.934,30.437c-1.041,41.624 -2.385,68.679 -4.032,81.166c-1.648,12.487 -5.463,24.41 -11.447,35.77c-5.983,11.359 -17.126,22.242 -33.428,32.648c15.435,9.365 26.664,20.552 33.688,33.559c7.024,13.007 11.143,31.738 12.357,56.191l3.903,75.703c1.56,7.284 5.289,12.79 11.186,16.519c5.896,3.729 19.424,5.593 40.583,5.593l-0,62.435l-13.528,0c-27.749,0 -49.168,-3.165 -64.256,-9.495c-15.089,-6.331 -26.015,-16.693 -32.778,-31.088c-6.764,-14.394 -10.146,-37.634 -10.146,-69.719c-0,-35.38 -1.214,-58.012 -3.642,-67.898c-2.428,-9.885 -7.111,-18.947 -14.048,-27.185c-6.937,-8.238 -20.031,-12.704 -39.282,-13.398Z'
                let rightCurlyPath = 'M177.94,281.217l-0,-62.434c-18.904,-0.174 -33.126,-5.767 -42.664,-16.78c-9.539,-11.013 -14.308,-35.77 -14.308,-74.271c-0,-29.31 -1.084,-51.032 -3.252,-65.167c-2.168,-14.135 -7.414,-25.971 -15.739,-35.51c-8.325,-9.539 -19.077,-16.432 -32.258,-20.681c-13.181,-4.249 -31.824,-6.374 -55.931,-6.374l-13.788,0l0,62.175c25.147,-0 40.193,2.601 45.135,7.804c4.943,5.203 7.588,15.349 7.935,30.437c1.04,41.624 2.384,68.679 4.032,81.166c1.648,12.487 5.463,24.41 11.446,35.77c5.984,11.359 17.127,22.242 33.429,32.648c-15.435,9.365 -26.665,20.552 -33.689,33.559c-7.024,13.007 -11.143,31.738 -12.357,56.191l-3.902,75.703c-1.561,7.284 -5.289,12.79 -11.186,16.519c-5.897,3.729 -19.424,5.593 -40.583,5.593l0,62.435l13.528,0c27.749,0 49.167,-3.165 64.256,-9.495c15.088,-6.331 26.014,-16.693 32.778,-31.088c6.764,-14.394 10.146,-37.634 10.146,-69.719c-0,-35.38 1.214,-58.012 3.642,-67.898c2.428,-9.885 7.11,-18.947 14.048,-27.185c6.937,-8.238 20.031,-12.704 39.282,-13.398Z'
                let svgs = [leftCurlyPath, rightCurlyPath]
                let colors = ['#fff']

                for (let i = 0; i < 150; i++) {
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