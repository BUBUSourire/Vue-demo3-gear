<template>
    <div class="row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "g-row",
        props: {
            gutter: { //平均间距大小
                type: [Number, String]
            },
            align: {
                type: String,
                validator(value) {
                    return ['left', 'right', 'center'].indexOf(value) >= 0;
                }
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter //将gutter传到每个子组件中
            })
        },
        computed: {
            rowStyle() {
                return {
                    marginLeft: -this.gutter / 2 + 'px',
                    marginRight: -this.gutter / 2 + 'px'
                }
            },
            rowClass() {
                let {align} = this
                return [align && `align-${align}`]
            }
        }
    }
</script>

<style scoped lang="scss">
    .row {
        display: flex;
        flex-wrap: wrap;

        &.align-left {
            justify-content: flex-start;
        }

        &.align-right {
            justify-content: flex-end;
        }

        &.align-center {
            justify-content: center;
        }
    }
</style>