<template>
    <Editor :value="value" :mode="mode" :plugins="plugins" @change="handleChange" />
</template>

<script lang="ts" setup>
import gfm from '@bytemd/plugin-gfm'
import highlight from '@bytemd/plugin-highlight'
import { ref } from "vue";
import { Editor } from '@bytemd/vue-next'

/**
 * 定义组件属性
 */
interface Props {
    value: string,
    mode?: string,
    handleChange: (v: string) => void
}

const props = withDefaults(defineProps<Props>(), {
    value: "",
    mode:"split",
    handleChange: (v: string) => {
        console.log(v);
    }
})

const plugins = [
    gfm(),
    highlight(),
    // Add more plugins here
]


</script>