<template>
    <div class="collapseItem">
        <div class="title" @click="toggle">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "g-collapse-item",
        props: {
            title: {
                type: String,
                require: true
            }
        },
        data() {
            return {
                open: false
            }
        },
        inject: ['eventBus'],
        mounted() {
            this.eventBus && this.eventBus.$on('update:selected', (vm) => {
                if (vm !== this) {
                    this.close()
                }
            })
        },
        methods: {
            toggle() {
                if (this.open) {
                    this.open = false
                } else {
                    this.open = true
                    this.eventBus && this.eventBus.$emit('update:selected', this)
                }
            },
            close() {
                this.open = false
            }
        }
    }
</script>

<style scoped lang="scss">
    $border-radius: 3px;
    .collapseItem {
        > .title {
            border: 1px solid #cccccc;
            border-collapse: collapse;
            margin: -1px;
            min-height: 32px;
            display: flex;
            align-items: center;
            padding: 0 8px;
        }

        &:first-child {
            > .title {
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }

        &:last-child {
            > .title:last-child {
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
        }
    }
</style>