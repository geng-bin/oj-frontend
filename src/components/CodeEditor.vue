<template>
    <div id="code-editor" ref="codeEditorRef" style="max-height: 400px;">
        <!-- {{ valueStr }} -->
        <!-- <a-button @click="fillValue">填充值</a-button> -->
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, toRaw } from 'vue';
import * as monaco from 'monaco-editor';

/**
 * 定义组件属性
 */
interface Props {
    value: string
    handleChange: (v: string) => void
}

const props = withDefaults(defineProps<Props>(), {
    value: "",
    handleChange: (v: string) => {
        console.log(v);
    }
})


const codeEditorRef = ref()
const codeEditor = ref()
const valueStr = ref('hello world')

const fillValue = () => {
    if (!codeEditor.value) {
        return;
    }
    toRaw(codeEditor.value).setValue("新的值");
}

onMounted(() => {
    if (!codeEditorRef.value) {
        return;
    }
    codeEditor.value = monaco.editor.create(codeEditorRef.value, {
        value: props.value,
        language: "java",
        automaticLayout: true,
        colorDecorators: true,
        minimap: {
            enabled: true,
            // size: 'proportional',
            // scale: 50
        },
        readOnly: false,
        theme: "vs-dark"

    });

    //编辑 监听内容变化
    codeEditor.value.onDidChangeModelContent(() => {
        props.handleChange(toRaw(codeEditor.value).getValue())

    })

})



</script>

<style></style>