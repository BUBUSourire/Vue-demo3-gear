<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line"></div>
        <div class="actions">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "g-tabs-head",
        inject: ['eventBus'],
        created() {
            this.eventBus.$on('update:selected',(item,vm)=>{
                console.log(item)
                console.log(vm)
                // console.log(vm.$el.getBoundingClientRect())
            })
        }
    }
</script>

<style scoped lang="scss">
    $tabs-head-height: 40px;
    .tabs-head {
        display: flex;
        height: $tabs-head-height;
        justify-content: flex-start;
        align-items: center;
        position: relative;

        > .line {
            position: absolute;
            bottom: 0;
            width: 100px;
            border-bottom: 1px solid red;
        }

        > .actions {
            margin-left: auto;
        }
    }
</style>