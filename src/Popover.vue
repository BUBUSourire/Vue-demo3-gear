<template>
    <div class="popover" @click="xxx">
        <div class="popContentStyle" v-if="showing">
            <slot name="popContent"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "g-popover",
        data() {
            return {
                showing: false
            }
        },
        methods: {
            xxx() {
                this.showing = !this.showing
            }
        }
    }
</script>

<style scoped lang="scss">
    .popover {
        display: inline-block;
        vertical-align: bottom;
        position: relative;

        .popContentStyle {
            position: absolute;
            bottom: 10px;
            border: 1px solid red;
            box-shadow: 0 0 3px #333333;
        }
    }

</style>