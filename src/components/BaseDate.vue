<script setup lang="ts">
import DatePicker from "vue-datepicker-next";
import 'vue-datepicker-next/index.css';
import 'vue-datepicker-next/locale/es';
import {ref} from "vue";

const time = ref(null);
</script>

<template>
  <DatePicker prefix-class="xmx" v-model:value="time">
    <template #icon-calendar>
      <div
          class="cursor-pointer"
      >
        <img src="../assets/calendar.svg" alt="calendar">
      </div>
    </template>
  </DatePicker>
</template>

<style lang="scss">
$namespace: 'xmx';

@import 'vue-datepicker-next/scss/index.scss';

.mx-datepicker {
  display: block;
}
.vdp-datepicker__calendar {
  right: 0;
}
.xmx-datepicker-popup {
  margin-top: 0 !important;
}
.xmx-datepicker-main {
  border: 0 !important;
  min-width: 100%;
  z-index: 2 !important;
}
.xmx-input {
  padding: 6px 10px 6px 30px ;
}
.xmx-icon-calendar, .xmx-icon-clear {
  left: 8px;
  width: 18px;
}
.xmx-calendar {
  padding: 0 !important;
  min-width: 100% !important;
}
.xmx-calendar-header {
  text-transform: capitalize;
  background-color: green;
  padding: 0 12px;
  border-bottom: 0.3px solid rgba(255, 255, 255, .5);
}
.xmx-calendar-header > button > i {
  color: white;
}
.xmx-calendar-header > button > i:hover {
  color: green;
}
.xmx-calendar-header-label > button {
  color: white;

}
.xmx-calendar-header-label {
  color: white;

}
.xmx-btn:hover {
  color: green !important;
}
.xmx-table > thead {
  background-color: green;
  color: white;

}
.xmx-table > thead > tr > th {
  padding-left: 12px;
}
.xmx-table > tbody {
  padding: 0 12px;
}
.xmx-date-row > .cell, .xmx-table-year .cell {
  border-radius: 3px;
}
.xmx-table-month {
  text-transform: capitalize;
}
.xmx-table-month .cell, .xmx-table-year .cell {
  border-radius: 3px;
}
.xmx-calendar-decade-separator:after {
  content: '-' !important;
}
.dateInputIcon .vs__dropdown-toggle .vs__selected-options .vs__selected {
  padding-left: 1.9rem;
  color: black;
}
.dateInputIcon .vs__dropdown-toggle .vs__selected-options .vs__search:only-child {
  padding-left: 1.9rem;
  color: black;
  display: block;
}
.dateInputIcon .vs__dropdown-toggle .vs__actions button {
  display: block !important;
}
</style>