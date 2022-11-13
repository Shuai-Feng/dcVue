<template>
    <template  v-for="({ title, path, children }) in props.menuCfg">
        <a-menu-item :key="path" v-if="!Array.isArray(children)">
            <router-link :to="path">
                {{title}}
            </router-link>
        </a-menu-item>

        <a-sub-menu :key="path+'else'" v-else>
            <template #title>
                {{title}}
            </template>
            <SubMenu :menuCfg="children" />
        </a-sub-menu>

    </template>
</template>

<script setup lang="ts">

import { ImenuCfgItem } from './menuCfg';

const props = defineProps<{ menuCfg: ImenuCfgItem[] }>()

</script>