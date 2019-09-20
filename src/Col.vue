<template>
    <div class="col" :class="colClass"
         :style="colStyle"> <!--语法记忆：若offset存在，则执行后面的代码-->
        <slot></slot>
    </div>
</template>

<script>
    let validator = (value) => {
        let keys = Object.keys(value)
        let valid = true
        keys.forEach((key) => {
            if (!['span', 'offset'].includes(key)) {
                valid = false
            }
        })
        return valid
    }
    export default {
        name: "g-col",
        props: {
            span: { //所占大小
                type: [Number, String]
            },
            offset: { //margin-right 多少
                type: [Number, String]
            },
            ipad: {type: Object, validator,},
            narrowPc: {type: Object, validator,},
            pc: {type: Object, validator,},
            widePc: {type: Object, validator,}
        },
        data() {
            return {
                gutter: 0
            }
        },
        computed: {
            colStyle() {
                return {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px'
                }
            },
            colClass() {
                let {span, offset, ipad, narrowPc, pc, widePc} = this
                return [
                    span && `col-${span}`,
                    offset && `offset-${offset}`,
                    ...(ipad ? [`col-ipad-${ipad.span}`] : []),
                    ...(narrowPc ? [`col-narrow-pc-${narrowPc.span}`] : []),
                    ...(pc ? [`col-pc-${pc.span}`] : []),
                    ...(widePc ? [`col-wide-pc-${widePc.span}`] : [])
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .col {
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
        @media (min-width: 577px) {
            $class-prefix: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 769px) { // 770
            $class-prefix: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 993px) {
            $class-prefix: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 1201px) {
            $class-prefix: col-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix: offset-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
    }
</style>