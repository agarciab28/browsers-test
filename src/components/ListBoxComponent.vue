<script setup lang="ts">
import {ref} from "vue";
import {Listbox, ListboxButton, ListboxOptions, ListboxOption, ListboxLabel} from '@headlessui/vue';

const props = defineProps<{
  
}>()

const value = ref(null);
const options = [{label: 'test1', value: 1}, {label: 'test2', value: 2}]
</script>

<template>
  <div>
    <Listbox v-model="value">
      <ListboxLabel>Name</ListboxLabel>
      <ListboxButton class="w-full h-12 rounded bg-white text-black text-left px-2 flex justify-between items-center border border-gray-300 ui-open:border-emerald-500">
        <div class="ui-open:opacity-30">{{ value ? value.label : 'Placeholder'}}</div>
        <div>
          <img src="../assets/select_arrow_down.svg" alt="arrow" class="ui-open:rotate-180">
        </div>
      </ListboxButton>
      <ListboxOptions class="rounded">
        <ListboxOption
            v-for="option in options"
            :key="option.value"
            :value="option"
            class="h-12 border border-gray-300 flex items-center px-2 ui-active:bg-neutral-200"
        >
          {{option.label}}
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
  </div>
</template>

<style scoped></style>