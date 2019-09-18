<template>
    <div class="col" :class="colClass"
         :style="colStyle"> <!--语法记忆：若offset存在，则执行后面的代码-->
        <div style="border: 1px solid green">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "g-col",
        props: {
            span: { //所占大小
                type: [Number, String]
            },
            offset: { //margin-right 多少
                type: [Number, String]
            }
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
                let {span,offset} = this
                return [
                    span && `col-${span}`,
                    offset && `offset-${offset}`
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
    }
</style>