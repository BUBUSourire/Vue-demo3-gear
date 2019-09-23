<template>
    <transition name="fade">
        <div class="sider" v-if="active">
            <slot></slot>
            <button @click="active = false">点击</button>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "g-sider",
        data() {
            return {
                active: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .sider {
        width: 150px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: all 1s;
    }

    .fade-enter, .fade-leave-to {
       margin-left: -150px;
    }
</style>