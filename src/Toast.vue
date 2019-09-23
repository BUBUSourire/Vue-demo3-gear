<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "g-toast",
    }
</script>

<style scoped lang="scss">
    $font-size:14px;
    $toast-height:40px;
    $toast-bg:#eee;
.toast {
    border: 1px solid #ccc;
    position: fixed;
    bottom:0;
    left: 50%;
    transform: translateX(-50%);
    font-size: $font-size;
    line-height: 1.8;
    height: $toast-height;
    display: flex;
    align-items: center;
    background: $toast-bg;
    padding: 0 16px;
    border-radius: 4px;
}
</style>