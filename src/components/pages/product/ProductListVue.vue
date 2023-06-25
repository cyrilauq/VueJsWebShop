<template>
    <section class="product-section">
        <!-- Render 10 ProductItemVue elements -->
        <ProductItemVue v-for="n in 10" />
    </section>
</template>

<script setup lang="ts">
    import ProductItemVue from '@/components/pages/ProductItemVue.vue';
</script>

<style scoped>
    .product-section {
        display: flex;
        flex-direction: row;
    }
</style>