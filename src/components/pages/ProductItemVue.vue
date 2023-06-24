<template>
    <RouterLink to="/coucou" class="product-vue">
        <div>
            <h4>Product name</h4>
            <div>
                <img src="img.jpg" alt="Product number XXX" />
                <p class="hide" >Description</p>
            </div>
            <p>Price</p>
        </div>
    </RouterLink>
</template>

<script setup lang="ts">

</script>

<style scoped>
    @keyframes slideaway {
        from { display: block; }
        to { display:none; }
    }
    @keyframes smooth-appear {
        from {
            display: none;
            margin-bottom: 100px;
        }
        to{
            display: block;
            margin-bottom: 0;
        }
    }
    .hide {
        opacity: 0;
        transform: translateY(50px); /* move the div 50 pixels down */
        transition: opacity 1s ease, transform 1s ease; /* specify animation duration and easing */
    }
    .product-vue {
        width: 7%;
        display: flex;
        flex-direction: column;
    }
    .product-vue > div {
        width: 100%;
    }
    .product-vue > div > div {
        width: inherit;
        height: 100px;
    }
    .product-vue:hover > div p {
        width: inherit;
        height: inherit;
    }
    .product-vue:hover > div > div img {
        display: none;
    }
    .product-vue:hover > div > div p {
        opacity: 1;
        transform: translateY(0); /* move the div back to its original position */
    }
</style>