<template>
    <section>
        <h2>Most viewed</h2>
        <section class="product-section">
            <!-- Render 10 ProductItemVue elements -->
            <ProductItemVue v-for="n in 10" />
        </section>
        <h2>Recently added</h2>
        <section class="product-section">
            <!-- Render 10 ProductItemVue elements -->
            <ProductItemVue v-for="n in 10" />
        </section>
    </section>
</template>

<script setup lang="ts">
    import ProductItemVue from '@/components/pages/ProductItemVue.vue'
</script>

<style scoped>
    section {
        justify-content: center;
        display: flex;
        flex-direction: column;
    }
    .product-section {
        display: flex;
        flex-direction: row;
    }
</style>