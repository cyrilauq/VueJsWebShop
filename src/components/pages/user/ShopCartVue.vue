<template>
    <div>

    </div>
</template>

<script setup lang="ts">
    import { useRoute } from 'vue-router'

    /* Rretrieve the current route */
    const route = useRoute();

    if(route.params.name !== undefined) {
        console.log(route.params.name);
    }
</script>

<style scoped>

</style>