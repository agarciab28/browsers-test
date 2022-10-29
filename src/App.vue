<script setup lang="ts">
import ListboxComponent from './components/ListBoxComponent.vue';
import BaseDate from './components/BaseDate.vue';
import BaseDateInput from './components/BaseDateInput.vue';

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
const names = ['Alejandro', 'Roberto', 'Fernando'];
const name = names.at(1);

</script>

<template>
  <div class="px-2">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    {{name}}
    <ListboxComponent></ListboxComponent>
    <BaseDateInput  />
    <BaseDate />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
