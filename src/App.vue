<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <b-container>
      <b-row>      
        <b-col cols="3">SingleDatePicker</b-col>
        <b-col cols="9">
          <single-date-picker v-model="selectedDate"/>
          <pre>{{ selectedDate }}</pre>
        </b-col>
        <b-col cols="3">MultipleDatePicker</b-col>
        <b-col cols="9">
          <multiple-date-picker v-model="selectedDates"/>
          <pre>{{ selectedDates }}</pre>
        </b-col>
        <b-col cols="3">DateRangePicker</b-col>
        <b-col cols="9">
          <date-range-picker v-model="selectedDateRange"/>
          <pre>{{ selectedDateRange }}</pre>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SingleDatePicker from "./components/SingleDatePicker.vue";
import MultipleDatePicker from "./components/MultipleDatePicker.vue";
import DateRangePicker from "./components//DateRangePicker.vue";
export default {
  name: "App",
  components: {
    DateRangePicker,
    SingleDatePicker,
    MultipleDatePicker
  },
  data() {
    return {
      selectedDate: new Date(2018, 11, 1),
      selectedDates: [new Date(2018, 11, 1), new Date(2018, 11, 2)],
      selectedDateRange: {
        start: new Date(2018, 11, 1),
        end: new Date(2018, 11, 2)
      }
    };
  }
};
</script>

<style lang="scss">
//== Lato font
@import url("https://fonts.googleapis.com/css?family=Lato:400,700");

//== Bootstrap and included styles
@import "./style/style.scss";
</style>
