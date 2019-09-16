<template>
    <div class="wrapper" :class="{error}">
        <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
               @change="$emit('change',$event)"
               @input="$emit('input',$event)"
               @focus="$emit('focus',$event)"
               @blur="$emit('blur',$event)"
        >
        <template v-if="error" >
            <icon name="error" class="icon-error"></icon>
            <span class="message-error">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from "./Icon";

    export default {
        name: "g-input",
        components: {
            Icon
        },
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $red: #F1453D;

    .wrapper {
        display: inline-block;
        font-size: $font-size;

        >.message-error {
            color: $red;
        }

        >.icon-error {
            color: $red;
        }

        > input {
            height: 32px;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;

            &:hover {
                border-color: $border-color-hover;
            }

            &:focus {
                outline: none;
                box-shadow: inset 0 1px 3px $box-shadow-color;
            }

            &[disabled], &[readonly] {
                border-color: #ccc;
                color: #ccc;
                cursor: not-allowed;
            }
        }

        &.error {
            > input {
                border-color: $red;
                box-shadow: inset 0 1px 3px #eeeeee;
            }
        }
    }
</style>