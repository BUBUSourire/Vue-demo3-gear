<template>
    <div class="row" :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2}+'px'">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "g-row",
        props: {
            gutter: { //平均间距大小
                type: [Number, String]
            }
        },
        created(){
            console.log(this.$children)
        },
        mounted() {
            console.log(this.$children)
            this.$children.forEach((vm)=>{
                vm.gutter = this.gutter //将gutter传到每个子组件中
            })
        }
    }
</script>

<style scoped lang="scss">
    .row {
        display: flex;
        margin: 0 -10px;
    }
</style>