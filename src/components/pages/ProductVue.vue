<template>
    <section>
        <ul class="fil-ariane">
            <li class="fil-ariane-item"><RouterLink to="/home">Home</RouterLink></li>
            <li class="fil-ariane-item"><RouterLink to="/products">Products</RouterLink></li>
            <li class="fil-ariane-item">{{ $route.params.productId }}</li>
        </ul>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .fil-ariane {
        list-style-type: none;
        display: flex;
        flex-direction: row;
    }
    .fil-ariane-item {
        margin-left: 5px;
        margin-right: 5px;
    }
</style>