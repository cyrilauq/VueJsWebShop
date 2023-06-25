<template>
    <section class="site-section">
        <ul class="fil-ariane">
            <li class="fil-ariane-item"><RouterLink to="/home">Home</RouterLink></li>
            <li class="fil-ariane-item"><RouterLink to="/products">Products</RouterLink></li>
            <li class="fil-ariane-item">{{ $route.params.productId }}</li>
        </ul>
        <div>
            <div>
                <img :src="currentProduct?.imagePath" alt="An amazing product" />
                <ul id="item-action">
                    <li>Add whishlist</li>
                    <li>Share</li>
                </ul>
            </div>
            <div>
                <h4>Description</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque lobortis nulla. Sed eu mattis.</p>
                <h4>Caractérisitques</h4>
                <table>
                    <tr>
                        <td>Caractérisitque 1</td>
                        <td>Lorem ipsum dolor sit amet, </td>
                    </tr>
                    <tr>
                        <td>Caractérisitque 2</td>
                        <td>Lorem ipsum dolor sit amet, </td>
                    </tr>
                    <tr>
                        <td>Caractérisitque 3</td>
                        <td>Lorem ipsum dolor sit amet, </td>
                    </tr>
                </table>
            </div>
            <div id="buy-section">
                <div>
                    <p>Price</p>
                    <p>59.99€</p>
                </div>
                <button class="payement-btn">
                    Add to the cart
                </button>
                <button class="payement-btn">
                    Buy it now
                </button>
            </div>
        </div>
        <ProductListVue />
    </section>
</template>

<script setup lang="ts">
    import ProductListVue from '@/components/pages/product/ProductListVue.vue';

    import { Product } from '@/modules/Product'

    const currentProduct = new Product({
        name: "Product xxx",
        description: "A crazy product",
        id: 1,
        imagePath: '/images/not-found-image.jpg',
        price: 59.99
    })
</script>

<style scoped>
    .payement-btn {
        min-width: 120px;
        width: 50%;
    }
    #buy-section {
        display: flex;
        flex-direction: column;
    }
    .fil-ariane, #item-action {
        list-style-type: none;
        display: flex;
        flex-direction: row;
    }
    .fil-ariane-item {
        margin-left: 5px;
        margin-right: 5px;
    }
    img {
        width: 500px;
        height: 500px;
    }
    ul + div {
        display: flex;
        flex-direction: row;
        text-align: left;
    }
    ul + div > div {
        align-items: center;
        width: 28%;
    }
    ul + div > div:first-child {
        width: 40%;
    }
</style>