<template>
    <div class="toastAll" :class="toastClass">
        <div class="toast">
            <div class="line" style="">
                <slot v-if="!enableHtml"></slot>
                <div v-else v-html="$slots.default[0]"></div>
            </div>
            <span class="close" v-if="closeButton" @click="closeAll">{{closeButton.text}}</span>
        </div>
        <div id="test"></div>
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
                default: 5000
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
    $animation-duration:300ms;
    @keyframes slide_up {
        0% {
            opacity: 0;
            transform: translateY(100%)
        }
        100% {
            opacity: 1;
            transform: translateY(0%)
        }
    }
    @keyframes slide_down {
        0% {
            opacity: 0;
            transform: translateY(-100%)
        }
        100% {
            opacity: 1;
            transform: translateY(0%)
        }
    }
    @keyframes slide_center {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .toastAll {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);

        &.position-top {
            top: 0;
            .toast {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                animation: slide_down $animation-duration;
            }
        }

        &.position-bottom {
            bottom: 0;
            .toast {
                border-bottom-right-radius: 0;
                border-bottom-left-radius: 0;
                animation: slide_up $animation-duration;
            }
        }

        &.position-middle {
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            .toast {
                animation: slide_center $animation-duration;
            }
        }
    }

    .toast {
        border: 1px solid #ccc;
        font-size: $font-size;
        line-height: 1.8;
        min-height: $toast-min-height;
        display: flex;
        align-items: center;
        background: $toast-bg;
        border-radius: 4px;
        padding: 0 16px;
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