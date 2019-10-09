<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "g-collapse"
    }
</script>

<style scoped lang="scss">
    .collapse {
        border:1px solid #ccc;
        border-radius: 3px;
        border-collapse:collapse;
    }
</style>