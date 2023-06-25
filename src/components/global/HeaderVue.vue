<template>
    <header>
        <h1>{{ $route.name }}</h1>
        <nav>
            <ul>
                <li><router-link to="/home">Home</router-link></li>
                <li><router-link to="/about">About us</router-link></li>
                <li><router-link to="/contact">Contact us</router-link></li>
                <li><router-link to="/products">Products</router-link></li>
                <li><router-link to="/shop-cart">Shop cart</router-link></li>
                <li><router-link to="/profile">My profile</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const userName = ref("cyrilauquier")

</script>

<style scoped>
    header {
        width: 100%;
    }
    nav ul {
        display: flex;
        flex-wrap: wrap;
    }
    nav ul li {
        margin: 0px 10px 0px 10px;
        list-style-type: none;
    }
</style>