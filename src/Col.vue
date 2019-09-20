<template>
    <div class="col" :class="colClass"
         :style="colStyle"> <!--语法记忆：若offset存在，则执行后面的代码-->
        <div style="border: 1px solid green">
            <slot></slot>
        </div>
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
            iPad: {type: Object, validator,},
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
                let {span, offset, iPad, narrowPc, pc, widePc} = this
                let phoneClass = []
                return [
                    span && `col-${span}`,
                    offset && `offset-${offset}`,
                    ...(iPad ? [`col-iPad-${iPad.span}`] : []),
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
        height: 50px;
        /*background-color: #eee;*/
        width: 50%;
        /*border: 1px solid red;*/

        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }

        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-right: ($n / 24) * 100%;
            }
        }


        @media (min-width: 577px) and (max-width: 768px) {
            $class-prefix: col-iPad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }

            $class-prefix: offset-iPad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-right: ($n / 24) * 100%;
                }
            }
        }

        @media (min-width: 769px) and (max-width: 992px) {
            $class-prefix: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }

            $class-prefix: offset-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-right: ($n / 24) * 100%;
                }
            }
        }

        @media (min-width: 993px) and (max-width: 1200px) {
            $class-prefix: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }

            $class-prefix: offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-right: ($n / 24) * 100%;
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
                    margin-right: ($n / 24) * 100%;
                }
            }
        }
    }
</style>