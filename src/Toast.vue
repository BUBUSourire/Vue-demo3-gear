<template>
    <div class="toast" :class="toastClass">
        <div class="line" style="">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <span class="close" v-if="closeButton" @click="closeAll">{{closeButton.text}}</span>
    </div>
</template>

<script>
    export default {
        name: "g-toast",
        props: {
            closeToast: {
                type: Boolean,
                default: true
            },
            closeToastDelay: {
                type: Number,
                default: 50000
            },
            closeButton: {
                //如果默认值是对象，需写成函数形式，返回该对象
                type: Object,
                default() {
                    return {
                        text: '关闭',
                        callback: undefined
                    }
                }
            },
            enableHtml: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'bottom',
                validator(value) {
                    return ['top', 'bottom', 'middle'].indexOf(value) >= 0
                }
            }
        },
        computed: {
            toastClass() {
                return {[`position-${this.position}`]: true}
            }
        },
        mounted() {
            this.timeClose()
        },
        methods: {
            timeClose() {
                if (this.closeToast) {
                    setTimeout(() => {
                        this.close()
                    }, this.closeToastDelay)
                }
            },
            close() {
                this.$el.remove()
                this.$emit('close')
                this.$destroy()
            },
            closeAll() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback()
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: #eee;
    .toast {
        border: 1px solid #ccc;
        position: fixed;
        left: 50%;
        font-size: $font-size;
        line-height: 1.8;
        min-height: $toast-min-height;
        display: flex;
        align-items: center;
        background: $toast-bg;
        border-radius: 4px;
        padding: 0 16px;

        &.position-top {
            top: 0;
            transform: translateX(-50%);
        }

        &.position-bottom {
            bottom: 0;
            transform: translateX(-50%);
        }

        &.position-middle {
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .close {
        cursor: pointer;
        flex-shrink: 0;
    }

    .line {
        height: 100%;
        margin: 0 15px;
        border-right: 1px solid #ccc;
        padding-right: 10px;
    }
</style>