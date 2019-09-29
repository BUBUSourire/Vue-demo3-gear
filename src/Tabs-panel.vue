<template>
    <div class="tabs-panel" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "g-tabs-panel",
        inject:['eventBus'],
        data(){
            return {
                active:false
            }
        },
        computed:{
            classes(){
                return {
                    active:this.active
                }
            }
        },
        props:{
            name:{
                type:String|Number,
                required:true
            }
        },
        created() {
            this.eventBus.$on('update:selected',(name)=>{
                if (this.name === name){
                    this.active = true
                }else {
                    this.active = false
                }
            })
        }
    }
</script>

<style scoped lang="scss">
    .tabs-panel {
        height: 50px;
        &.active {
            background-color: red;
        }
    }
</style>