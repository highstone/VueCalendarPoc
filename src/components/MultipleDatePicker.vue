<template>
  <div>    
    <v-date-picker
      :value="value"
      :min-date="minDate"
      :max-date="maxDate"  
      :theme-styles="themeStyles" 
      is-double-paned mode="multiple"
      @input="$emit('input', $event)">
      <b-input-group slot-scope="{inputValue, updateValue}">
        <b-input-group-text slot="prepend">@</b-input-group-text>
        <b-form-input 
          :class='[{ "show-day-span": showDaySpan }]'
          :value="inputValue"
          @change="updateValue($event.target.value)"
          />
        <b-input-group-text slot="append" class="date-range" v-if="showDaySpan">{{ getDaySpan(value) }} nachten</b-input-group-text>
      </b-input-group>
    </v-date-picker>    
  </div>
</template>

<script>
import { themeStyles } from "./DatePickerThemeStyles.js";
export default {
  name: "MultipleDatePicker",
  props: {
    value: { type: Array, default: () => [] },
    minDate: { type: Date, default: null },
    maxDate: { type: Date, default: null },
    showDaySpan: { type: Boolean, default: true }
  },
  methods: {
    getDaySpan(dates) {
      if (!dates) return 0;
      return dates.length;
    }
  },
  data() {
    return {
      themeStyles: themeStyles
    };
  }
};
</script>

<style lang="scss" scoped>
.input-group {
  .form-control.show-day-span {
    border-right: none;
  }
  .input-group-append {
    .input-group-text {
      font-size: 0.875rem;
      color: #999 !important;
      background-color: inherit;
    }
  }
}
</style>
