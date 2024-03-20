<script setup lang="ts">
import CodeEditor from '@/components/CodeEditor.vue';
import MdEditor from '@/components/MdEditor.vue';
import { ref } from 'vue';

const value = ref("")
const onChange = (v: string) => {
  value.value = v
}
</script>

<template>
  <div id="example">
    <CodeEditor :value="value" :handle-change="onChange" />
    <!-- <MdEditor :value="value" :handle-change="onChange" /> -->

  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
