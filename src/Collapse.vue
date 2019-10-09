<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: "g-collapse",
        props: {
            single: {
                type: Boolean,
                default: false
            },
            selected: {
                type: String
            }
        },
        data() {
            return {
                eventBus: new Vue()
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
        mounted() {
            this.eventBus.$emit('update:selected', this.selected)
        }
    }
</script>

<style scoped lang="scss">
    .collapse {
        border: 1px solid #ccc;
        border-radius: 3px;
        border-collapse: collapse;
    }
</style>