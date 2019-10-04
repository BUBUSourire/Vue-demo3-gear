<template>
    <div class="popover" @click.stop="xxx">
        <div class="popContentStyle" v-if="showing" @click.stop>
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
            xxx(e) {
                e.stopPropagation()
                this.showing = !this.showing
                if (this.showing === true) {
                    let eventHandler = () => {
                        this.showing = false
                        console.log('document隐藏')
                        document.removeEventListener('click', eventHandler)
                    }
                    document.addEventListener('click', eventHandler)
                }else{
                    console.log('组件自身隐藏')
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .popover {
        display: inline-block;
        vertical-align: bottom;
        position: relative;
        margin: 50px 0;

        .popContentStyle {
            position: absolute;
            bottom: 20px;
            border: 1px solid red;
            box-shadow: 0 0 3px #333333;
        }
    }

</style>