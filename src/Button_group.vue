<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Button_group",
    }
</script>

<style lang="scss">
.g-button-group {
    display: inline-flex;
    vertical-align: middle;
    >.g-button{
        border-radius: 0;
        &:first-child{
            border-top-left-radius: var(--border-radius);
            border-bottom-left-radius: var(--border-radius);
            margin-right: -1px;
        }
        &:last-child{
            border-top-right-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
        }
        &:hover {
            position: relative;
            z-index: 1;
            border-color: red;
        }
    }
}
</style>