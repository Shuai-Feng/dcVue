<template>
    <a-layout theme="dark" style="min-height:100vh;">
        <a-layout-sider>
            <section class="logo">
                <img src="/vite.svg" alt="">
                <p>Vue 单车</p>
            </section>
            <a-menu theme="dark">
                <sub-menu :menuCfg="menuCfg" />
            </a-menu>
        </a-layout-sider>
        <a-layout class="layoutContent">
            <a-header class="layoutHeader scrolled">
                HEADER
            </a-header>
            <a-layout-content style="margin:12px;">
                <router-view />

            </a-layout-content>
        </a-layout>
    </a-layout>

</template>

<script lang="ts" setup>
import menuCfg from './menuCfg'
import SubMenu from './SubMenu.vue'


</script>

<style scoped lang='less'>
.logo {
    height: 90px;
    background: #002340;
    display: flex;
    align-items: center;
    flex-direction: row;

    img {
        margin: 0px 16px;
    }

    p {
        color: #fff;
        font-size: 24px;
        margin-bottom: 0px;
    }
}

.layoutContent {
    position: relative;
    max-height: 100vh;
    overflow-y: scroll;

    .layoutHeader {
        position: sticky;
        z-index: 999;
        top: 0px;
        padding: 12px;
        background-color: #fff;
        transition: all 0.4s ease-out;

        width: calc(100%);
        left: 0px;

        &.scrolled {
            width: calc(100% - 24px);
            left: 12px
        }
    }
}
</style>