<template>
    <div class="popover" @click="onClick" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" style="display: inline-block">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "g-popover",
        data() {
            return {
                visible: false
            }
        },
        methods: {
            positionContent() {
                document.body.appendChild(this.$refs.contentWrapper)
                let {width, height, left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
                this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
            },
            onClickDocument(e){
                if (this.$refs.popover &&
                    (this.$refs.popover === e.target ||
                        this.$refs.popover.contains(e.target))) {
                }
                if (this.$refs.contentWrapper &&
                    (this.$refs.contentWrapper === e.target ||
                        this.$refs.contentWrapper.contains(e.target))) {
                } else {
                    this.close()
                }
            },
            open() {
                this.visible = true
                setTimeout(() => {
                    this.positionContent()
                    document.addEventListener('click', this.onClickDocument)
                }, 0)
            },
            close() {
                this.visible = false
                document.removeEventListener('click', this.onClickDocument)
            },
            onClick(e) {
                if (this.$refs.triggerWrapper.contains(e.target)) {
                    if (this.visible === true) {
                        this.close()
                    }else{
                        this.open()
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $border-radius:3px;
    $border-color:#ccc;
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }

    .content-wrapper {
        position: absolute;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        /*box-shadow: 0 0 3px #eee;*/
        filter: drop-shadow(0 0 3px #eee);
        background-color: #fff;
        transform: translateY(-100%);
        padding: .5em 1em;
        margin-top: -10px;
        max-width: 20em;

        &::before,&::after {
             content: '';
             display: block;
             border: 10px solid transparent;
            border-top-color: $border-color;
             width: 0;
             height: 0;
             position: absolute;
             top: 100%;
             left: 10px;
         }

        &::after {
            border-top-color: #fff;
            top: calc(100% - 1px);
        }
    }


</style>