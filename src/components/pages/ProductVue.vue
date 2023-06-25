<template>
    <section class="site-section">
        <ul class="fil-ariane">
            <li class="fil-ariane-item"><RouterLink to="/home">Home</RouterLink></li>
            <li class="fil-ariane-item"><RouterLink to="/products">Products</RouterLink></li>
            <li class="fil-ariane-item">{{ $route.params.productId }}</li>
        </ul>
        <div>
            <div>
                <img src="my-product.jpg" alt="An amazing product" />
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
            <div>
                <div>
                    <p>Price</p>
                    <p>59.99€</p>
                </div>
                <button>
                    Buy it
                </button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
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
    ul + div > div:first-child {
        width: 50%;
    }
</style>