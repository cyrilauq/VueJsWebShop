<template>
    <section>
        <h2>Most viewed</h2>
        <ProductListVue />
        <h2>Recently added</h2>
        <ProductListVue />
    </section>
</template>

<script setup lang="ts">
    import ProductListVue from '@/components/pages/product/ProductListVue.vue'
</script>

<style scoped>
    section {
        justify-content: center;
        display: flex;
        flex-direction: column;
    }
</style>