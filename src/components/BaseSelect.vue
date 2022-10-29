<script setup lang="ts">
  import {ref} from "vue";

  const value = ref(null);
  const options = [{label: 'test1', value: 1}, {label: 'test2', value: 2}]
</script>

<template>
  <div>
    <select v-model="value">

    </select>
  </div>
</template>

<style scoped></style>