<template>

    <button class="g-button" :class="{[`icon-${icon_position}`]:true}" @click="$emit('click')">
        <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>

</template>

<script>
    export default {
        name: "g-button",
        // props: ['icon', 'icon_position']
        props: {
            'icon': '',
            'icon_position': {
                type: String,
                default: 'left',
                //属性检查器
                validator(value) { //value -> 用户传入的icon_position的值
                    if (value !== 'left' && value !== 'right') {
                        return false
                    } else {
                        return true
                    }
                }
            },
            'loading':{
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss">
    @keyframes spin {
        0% {
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(360deg)
        }
    }

    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        margin-top: 10px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        &:hover {
            border-color: var(--border-color);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }

        > .content {
            order: 2
        }

        > .icon {
            order: 1;
            margin-right: .3em;
        }

        &.icon-right {
            > .content {
                order: 1
            }

            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .3em;
            }
        }
        .loading {
            animation: spin 1s infinite linear;
        }
    }

</style>
