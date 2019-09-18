<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "g-col",
        props: {
            span: {
                type: [Number, String]
            }
        }
    }
</script>

<style scoped lang="scss">
    .col {
        height: 50px;
        background-color: #eee;
        width: 50%;
        border: 1px solid red;

        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
    }
</style>