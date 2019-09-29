<template>
    <div class="tabs-item" @click="xxx" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Tabs-item",
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
            disabled:{
                type:Boolean,
                default:false
            },
            name:{
                type: String|Number,
                required:true
            }
        },
        methods:{
            xxx(){
                this.eventBus.$emit('update:selected',this.name)
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
    .tabs-item {
        flex-shrink: 0;
        padding: 6px 2em;
        border: 1px solid #333333;
        border-radius: 3px;
        &.active {
            background-color: red;
        }
    }
</style>