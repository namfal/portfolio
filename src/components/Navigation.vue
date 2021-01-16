<template>
    <nav class="navigation">
        <router-link :to="{ name: 'Home' }" exact class="link">Home</router-link>
        <router-link :to="{ name: 'Resume' }" class="link">Resume</router-link>
    </nav>
</template>

<script>
    export default {
        name: 'Navigation'
    }
</script>

<style scoped lang="less">
    @import '../styles/common';

    nav {
        position: absolute;
        top: 50px;
        right: 50px;
    }

    .link {
        display: inline-block;
        color: white;
        text-decoration: none;
        margin: 20px;
        font-size: 24px;
        border: 2px solid white;
        padding: 20px;
        box-shadow: 6px 6px 0 0 white;
        transition: all 200ms ease-in-out;

        &:hover {
            box-shadow: 0 0 0 6px @bright-turquoise;
        }
    }

    .router-link-active{
        color: @bright-turquoise;
        box-shadow: 0 0 0 6px @bright-turquoise;
    }

</style>