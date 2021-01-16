<template>
    <nav class="navigation">
        <router-link :to="{ name: 'Home' }" class="link">Home</router-link>
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
        color: @mint;
        text-decoration: none;
        margin: 20px;
        font-size: 24px;
        border: 2px solid white;
        padding: 20px;
        box-shadow: 6px 10px 0 0 white;
        transition: all 200ms ease-in-out;

        &:hover {
            transform: translate(6px, 10px);
            box-shadow: none;
        }
    }



</style>