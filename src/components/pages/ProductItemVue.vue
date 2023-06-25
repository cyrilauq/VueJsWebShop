<template>
  <RouterLink :to="{ name: 'Product', params: { productId: 1 }}" class="product-vue" @mouseover="showImage = false" @mouseleave="showImage = true">
    <div>
      <h4>Product name</h4>
      <div>
        <img src="img.jpg" alt="Product number XXX" class="product-img" />
        <Transition
            name="description-slide"
            mode="out-in">
            <p v-show="!showImage" class="description">{{ description === undefined ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque lobortis nulla. Sed eu mattis." : description }}</p>
        </Transition>
      </div>
      <p>Price</p>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';

    const showImage = ref(true);
    const props = defineProps({
        description: String
    })
</script>

<style scoped>
    .product-vue {
        width: 7%;
        text-decoration: none;
        color: var(--color-text);
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    .product-vue > div {
        width: 100%;
        position: relative;
    }

    .product-vue > div > div {
        width: 100%;
        height: 100px;
    }

    .product-vue .description,
    .product-vue .product-img {
        max-width: 100%;
        max-height: 100px;
        min-width: 100%;
        min-height: 100px;
    }

    .product-vue .description {
        position: absolute;
        overflow-y: hidden;
        color: var(--color-text);
        background-color: rgba(25, 77, 129, .75);
        margin-top: -100px;
        left: 0;
    }

    /* Animations */
    .description-slide-enter-active,
    .description-slide-leave-active {
        transition: transform 0.3s ease;
    }

    .description-slide-enter-from,
    .description-slide-leave-to {
        transform: translateY(100px);
    }
</style>
