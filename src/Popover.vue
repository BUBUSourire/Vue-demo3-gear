<template>
    <div class="popover" @click.stop="xxx">
        <div class="popContentStyle" v-if="showing" ref="contentWrapper">
            <slot name="popContent"></slot>
        </div>
        <span ref="triggerWrapper">
            <slot></slot>
        </span>
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
                // e.stopPropagation()
                this.showing = !this.showing
                if (this.showing === true) {
                    this.$nextTick(() => {
                        document.body.appendChild(this.$refs.contentWrapper) //解决overflow：hidden的bug
                        let {width, height, left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
                        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
                        let eventHandler = () => {
                            this.showing = false
                            document.removeEventListener('click', eventHandler)
                        }
                        document.addEventListener('click', eventHandler)
                    })
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
    }

    .popContentStyle {
        position: absolute;
        border: 1px solid red;
        box-shadow: 0 0 3px #333333;
        transform: translateY(-100%);
    }

</style>