<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "g-layout",
        data(){
            return {
                layoutClass:{
                    hasSider:false
                }
            }
        },
        mounted() {
            this.$children.forEach((vm)=>{
                if (vm.$options.name === 'g-sider'){
                    this.layoutClass.hasSider = true
                }
            })
        }
    }
</script>

<style scoped lang="scss">
    .layout {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        /*如果有hasSider这个属性*/
        &.hasSider{
            flex-direction: row;
        }
    }
</style>