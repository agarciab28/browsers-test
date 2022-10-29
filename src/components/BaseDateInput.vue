<script setup lang="ts">
import format from 'date-fns/format';
import 'vue-datepicker-next/index.css';
import 'vue-datepicker-next/locale/es';
import DatePicker  from 'vue-datepicker-next';
import useResponsive from "../composables/useResponsive.js";
import {ref, computed} from 'vue';

const { isMobile } = useResponsive();

const props = defineProps({
  placeholder: {
    type: String,
    default: () => '',
  },
  error: {
    type: Boolean,
    default: () => false,
  },
});

const emit = defineEmits(['input'])

const content = ref<null | number | Date>(null)
const open = ref(false);
const datepicker = ref(null);

const date = computed(() => {
  if (content.value) {
    isMobile.value ? format(content.value, 'dd/MM/yyyy') : format (content.value, 'dd / MM / yyyyy');
  }
  return '';
})

const input = () => {
  emit('input', content);
}

const closeCalendar = () => {
  open.value = false;
}

const changeInput = () => {
  content.value = null;
}

const handleCalendar = () => {
  open.value = !open.value;
  console.log(datepicker.value)
  if (!open.value) {
    datepicker.value.click();
  }
}

const clearSelection = () => {
  handleCalendar();
  content.value = null
  emit('input', content.value);
}

</script>

<template>
  <DatePicker
    ref="datepicker"
    v-model.lazy="content"
    :placeholder="placeholder"
    format="DD/MM/YYYY"
    :clearable="false"
    class="w-full"
    prefix-class="xmx"
    :append-to-body="false"
    @close="closeCalendar"
    @input="input()"
  >
    <template #input>
      <div
        class="dateDiv flex w-full cursor-pointer flex-wrap"
        :class="{ 'rounded-b-none border': open, backDangerSelect: error }"
        @click="handleCalendar"
      >
        <input
          :id="`dateInput${placeholder}`"
          v-model="date"
          readonly
          :placeholder="placeholder"
          class="dateInputIcon select__mobile height-select-register myBets__dateFilter dateInput w-9/12  placeholder-neutral-900"
          @input="changeInput"
        />
        <div
          class="w-4 cursor-pointer"
          @click="clearSelection"
        >
          <img src="../assets/close_icon.svg" alt="close">
        </div>
        <div class="select_line"></div>
        <div class="w-5">
<!--          <svg-icon
            v-bind="attributes"
            name="select_arrow_icon"
            width="10px"
            height="10px"
            class="arrowIcon"
            :class="open ? 'rotate' : 'rotate-exit'"
          />-->
          <img src="../assets/select_arrow_down.svg" alt="arrow">
        </div>
      </div>
    </template>
    <template #icon-calendar>
      <div
        class="cursor-pointer"
        @click="handleCalendar"
      >
        <img src="../assets/calendar.svg" alt="calendar">
      </div>
    </template>
  </DatePicker>
</template>


<style lang="scss" scoped>
$namespace: 'xmx'; // change the 'mx' to 'xmx'. then <date-picker prefix-class="xmx" />
$transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);
$transition-duration: 150ms;
.rotate {
  transition: transform $transition-duration $transition-timing-function;
  transition-timing-function: $transition-timing-function;
  transform: rotate(-180deg);
}
.rotate-exit {
  transition: transform $transition-duration $transition-timing-function;
  transition-timing-function: $transition-timing-function;
}
.dateDiv {
  background-color: white;
  border: 1px solid gray;
  border-radius: 3px;
  line-height: 1.4;
  cursor: pointer;
  padding-left: 30px;
  height: 46px;
}
.dateInput {
  cursor: pointer;
  border: 0;
  height: 44px;
}
.arrowIcon {
  position: absolute;
  top: calc(50% - 5px);
  right: 10px;
}
.border {
  border: 1px solid green;
}
.backDangerSelect {
  background: rgba($color: red, $alpha: 0.05);
  border: solid 0.5px red;
  input {
    background-color: rgba($color: red, $alpha: 0);
  }
}
.myBets {
  &__subtitle {
    font-size: 13px;
    padding: 0.75rem 0;
    cursor: pointer;
  }
  &__dateFilter {
    font-weight: 400;
    font-size: 12px;
    letter-spacing: -0.25px;
  }
}
@media (min-width: 350px) {
  .myBets {
    &__dateFilter {
      font-size: 14px;
    }
  }
}
@media (min-width: 992px) {
  .myBets {
    &__subtitle {
      font-size: 16px;
    }
  }
  .dateDiv {
    padding-left: 35px;
  }
}

</style>
