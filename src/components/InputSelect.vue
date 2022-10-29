<template>
  <div  class="flex justify-center md:w-full">
    <div
      aria-haspopup="options"
      class="relative flex w-full bg-secondary border-2 border-secondary rounded-md
             shadow-md cursor-pointer focus:border-primary-contrast-200 focus:outline-none"
      tabindex="0"
      :aria-expanded="showOptions"
    >
      <!--Label-->
      <!--Mobile View-->
      <div class="md:tw-hidden relative w-full flex">
        <i v-if="icon" :class="icon"
           class="absolute far left-3 self-center text-primary-contrast-200"></i>
        <span v-if="!selectedOption"
              class="flex mr-2 text-secondary-contrast-200 group-hover:text-primary absolute pt-2 left-8 pl-2">
            {{ placeholder }}
        </span>
        <select
          style="background: none;"
          class="flex w-full flex-row group appearance-none focus:outline-none text-secondary-contrast-500 p-2 mr-2 pl-10 relative"
          v-model="selectedOption">
          <option v-for="option in options" :value="option">{{ option }}</option>
        </select>
        <i class="far fa-chevron-down absolute right-3 h-full
                 flex items-center justify-center ml-auto mr-1 text-xs pointer-events-none
                 group-focus:text-primary"/>
      </div>

      <!--Not Mobile View-->
      <div
        v-sm-hidden
        class="flex w-full flex-row group focus:outline-none px-4 py-1 pr-3"
        tabindex="-1"
        @click="toggleOptions">
        <i v-if="icon" :class="icon" class="far self-center text-primary-contrast-200 mr-3"></i>
        <div
          v-if="selectedOption"
          class="flex flex-row  w-full items-center mr-4">
                <span class="flex mr-2 text-secondary-contrast-500 group-hover:text-primary">
                  {{ selectedOption }}
                </span>
        </div>
        <div class="text-secondary-contrast-200" v-else>
          {{ placeholder }}
        </div>

        <i class="far fa-chevron-down
                 flex items-center justify-center ml-auto mr-1 text-xs pointer-events-none
                 group-focus:text-primary group-hover:text-primary common-transition"/>

      </div>
      <!--/Label-->

      <!--Options-->
      <div
        v-sm-hidden
        aria-labelledby="size_elem"
        class="absolute left-0 z-20 flex flex-col min-w-full px-4 py-2 mt-1 whitespace-nowrap top-full
            bg-secondary rounded-sm shadow-md focus:outline-none
            duration-150 ease-in-out transition transform origin-top scale-y-0 opacity-0"
        ref="Options"
        role="sizes"
        tabindex="-1"
        :class="{'opacity-100 scale-y-99': showOptions}">
        <!--Option Item-->
        <div
          v-for="option in options"
          class="flex items-center py-2 md:py-1 group"
          role="option"
          tabindex="0"
          :class="{'tw-hidden': !showOptions}"
          :id="'size_elem_' + option"
          @click="selectOption(option)">
          <span
            class="mr-2 text-secondary-contrast-400 font-medium md:font-normal group-hover:text-primary">
            {{ option }}
          </span>
        </div>
        <!--/Option Item-->
      </div>
    </div>
    <!--/Options-->

    <div
      v-if="showOptions"
      class="fixed inset-0 z-10 w-full h-full"
      @click="showOptions=false"
    />
  </div>
  <div v-else class="classic">
    <select
      required
      v-model="selectedOption">
      <option value=""  disabled selected hidden>asd</option>
      <option v-for="option in options" :value="option">{{ option }}</option>
    </select>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';

export default {
  props: {
    /* TODO: For re-usability it would be good to expand `options` to support an Array of Objects.
        E.g. {label: 'Brand new Toyota', value: 'NEW_TOYOTA}'
        this would require to also support properties to map the label and value keys.
        E.g. track-by="value" label="label",
    */
    options: {
      type: Array as () => Array<string>,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false
    },
    placeholder: {
      default: 'Select your option'
    }
  },
  data: () => ({
    showOptions: false,
    selectedOption: null
  }),
  watch: {
    value(val) {
      this.text = val;
    }
  },
  methods: {
    toggleOptions($event?) {
      if ($event) {
        $event.preventDefault();
      }
      this.showOptions = !this.showOptions;
    },
    selectOption(option: String) {
      this.selectedOption = option;
      this.toggleOptions();
      this.$emit('input', option);
    },
    keyDown() {
      this.toggleOptions();
      let options = <Element>this.$refs.Options;
      Vue.nextTick(() => {
        (<HTMLElement>options.firstChild).focus();
      });
    }
    /* If accessibility support needs to be expanded, there are good guidelines for that:
       https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
     */
  }
});
</script>

<style scoped>
  .classic {
    select:required:invalid {
      color: gray;
    }
    option[value=""][disabled] {
      display: none;
    }
    option {
      color: black;
    }
  }
</style>
