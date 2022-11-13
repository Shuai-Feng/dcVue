<template>
    <a-layout theme="dark" style="min-height:100vh;">
        <a-layout-sider>
            <section class="logo">
                <img src="/vite.svg" alt="">
                <p>vue单车</p>
            </section>
            <a-menu theme="dark">
                <sub-menu
                    :menuCfg="menuCfg"
                />
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-header style="background:#fff;">
                HEADER
            </a-header>
            <a-layout-content>
                <router-view />
                <a-layout-footer>
                    Footer
                </a-layout-footer>
            </a-layout-content>
        </a-layout>
    </a-layout>

</template>

<script lang="ts" setup>
   import menuCfg from './menuCfg'
   import SubMenu from './SubMenu.vue'
    defineProps({
        setup(){
            return{
                menuCfg
            }
        }
    })
    
</script>

<style scoped lang='less'>
.logo {
    height: 64px;
    background: #002340;
    display: flex;
    align-items: center;
    flex-direction: row;

    img {
        margin: 0px 16px;
    }

    p {
        color: #fff;
        font-size: 18px;
        margin-bottom: 0px;
    }
}
</style>