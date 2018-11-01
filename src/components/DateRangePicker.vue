<template>
  <div>    
    <v-date-picker 
      :value="value"
      :min-date="minDate"
      :max-date="maxDate"  
      :theme-styles="themeStyles"      
      is-double-paned mode="range"
      @drag="dragged = $event"
      @input="$emit('input', $event)">
      <b-input-group slot-scope="{inputValue, updateValue}">
        <b-input-group-text slot="prepend">@</b-input-group-text>
        <b-form-input 
          :class='[{ "show-day-span": showDaySpan, "is-dragged": !!dragged }]'
          :value="inputValue"
          @change="updateValue($event.target.value)"
          />
        <b-input-group-text slot="append" class="date-range">{{ getDaySpan(dragged || value) }} nachten</b-input-group-text>
      </b-input-group>
    </v-date-picker>
  </div>  
</template>

<script>
import { themeStyles } from "./DatePickerThemeStyles.js";

export default {
  name: "DateRangePicker",
  props: {
    value: { type: Object, default: () => {} },
    minDate: { type: Date, default: null },
    maxDate: { type: Date, default: null },
    showDaySpan: { type: Boolean, default: true }
  },
  methods: {
    getDaySpan(range) {
      if (!range) return 0;
      return (range.end - range.start) / (1000 * 60 * 60 * 24);
    }
  },
  data() {
    return {
      dragged: null,
      themeStyles: themeStyles
    };
  }
};
</script>

<style lang="scss" scoped>
.input-group {
  .form-control.show-day-span {
    border-right: none;

    &.is-dragged {
      color: #999;
    }
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
// .popover-content-wrapper {
//   .popover-content {
//     background-color: #fff !important;
//     border-radius: 0 !important;
//     box-shadow: none !important;

//     .c-day-background,
//     .c-day-content:hover,
//     .c-day-content:active {
//       border-radius: 0 !important;
//     }
//   }
// }
//
