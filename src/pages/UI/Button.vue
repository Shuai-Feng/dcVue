<template>
    <a-card title="基础的按钮" style="margin-top:10px;">
        <a-button style="margin-right:12px" type="primary">
            Vue 单车
        </a-button>
        <a-button style="margin-right:12px" type="danger">
            Vue 单车
        </a-button>
        <a-button style="margin-right:12px" type="dashed">
            Vue 单车
        </a-button>
        <a-button style="margin-right:12px">
            Vue 单车
        </a-button>
    </a-card>
    <a-card title="带icon的按钮" style="margin-top:20px;">
        <a-button style="margin-right:12px">
            <template #icon>
                <FileAddOutlined />
            </template>
            Vue 单车
        </a-button>
        <a-button style="margin-right:12px">
            <template #icon>
                <DeleteOutlined />
            </template>
            Vue 单车
        </a-button>
        <a-button style="margin-right:12px">
            <template #icon>
                <SearchOutlined />
            </template>
            Vue 单车
        </a-button>
        <a-button style="margin-right:12px">
            <template #icon>
                <EditOutlined />
            </template>
            Vue 单车
        </a-button>
    </a-card>
    <a-card title="loding中的按钮" style="margin-top:20px;">
        <a-button loading style="margin-right:12px">
            <template #icon>
                <FileAddOutlined />
            </template>
            Vue 单车
        </a-button>
        <a-button loading style="margin-right:12px">
            <template #icon>
                <DeleteOutlined />
            </template>
            Vue 单车
        </a-button>
        <a-button loading style="margin-right:12px">
            <template #icon>
                <SearchOutlined />
            </template>
            Vue 单车
        </a-button>
        <a-button loading style="margin-right:12px">
            <template #icon>
                <EditOutlined />
            </template>
            Vue 单车
        </a-button>
        <a-button shape="round" loading style="margin-right:12px">
            <template #icon>
                <EditOutlined />
            </template>

        </a-button>
    </a-card>
    <a-card title="按钮组" style="margin-top:20px;">
        <a-radio-group>
            <a-radio-button value="large">
                <LeftOutlined />
                左边
            </a-radio-button>
            <a-radio-button value="default">
                <RightOutlined />
                右边
            </a-radio-button>
        </a-radio-group>
    </a-card>
    <a-card title="大中小按钮" style="margin-top:20px;">
        <a-radio-group v-model:value="size">
            <a-radio value="large">大</a-radio>
            <a-radio value="middle">中</a-radio>
            <a-radio value="small">A</a-radio>
        </a-radio-group>
        <a-button :size="size">
            {{size}}
        </a-button>
    </a-card>
</template>
<script lang="ts" setup>
import {ref,onMounted,onUnmounted} from 'vue'
import { SearchOutlined, EditOutlined, DeleteOutlined, FileAddOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons-vue';
const size = ref<'large'|'middle'|'small'>('small')



</script>