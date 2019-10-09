<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: "g-collapse",
        props:{
            single:{
                type:Boolean,
                default:false
            }
        },
        data() {
            return {
                eventBus: new Vue()
            }
        },
        provide() {
            if(this.single){
                return {
                    eventBus: this.eventBus
                }
            }
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