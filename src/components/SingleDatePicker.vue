<template>
  <div>
    <v-date-picker
      :value="value"
      :min-date="minDate"
      :max-date="maxDate"  
      :theme-styles="themeStyles"  
      mode="single" is-double-paned
      @input="$emit('input', $event)">
      <b-input-group slot-scope="{inputValue, updateValue}">
        <b-input-group-text slot="prepend">@</b-input-group-text>
        <b-form-input 
          :value="inputValue"
          @change="updateValue($event.target.value)"
          />          
      </b-input-group>
    </v-date-picker>        
  </div>
</template>

<script>
import { themeStyles } from "./DatePickerThemeStyles.js";
export default {
  name: "SingleDatePicker",
  props: {
    value: { type: Date, default: null },
    minDate: { type: Date, default: null },
    maxDate: { type: Date, default: null }
  },
  data() {
    return {
      themeStyles: themeStyles
    };
  }
};
</script>
