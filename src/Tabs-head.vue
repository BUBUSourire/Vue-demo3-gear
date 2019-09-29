<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="actions">
            <slot name="actions"></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "g-tabs-head",
        inject:['eventBus'],
        created() {

        }
    }
</script>

<style scoped lang="scss">
    $tabs-head-height:40px;
    .tabs-head {
        display: flex;
        height: $tabs-head-height;
        border: 1px solid red;
        justify-content: flex-start;
        align-items: center;
        > .actions {
            margin-left: auto;
        }
    }
</style>