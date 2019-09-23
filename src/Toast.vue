<template>
    <div class="toast">
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
            enableHtml:{
                type:Boolean,
                default:false
            }
        },
        mounted() {
            if (this.closeToast) {
                setTimeout(() => {
                    this.close()
                }, this.closeToastDelay)
            }
        },
        methods: {
            close() {
                this.$el.remove()
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
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
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