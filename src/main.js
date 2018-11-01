import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import VCalendar from "v-calendar";
import "v-calendar/lib/v-calendar.min.css";
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VCalendar, {
  firstDayOfWeek: 2, // Monday
  locale: "nl-NL",
  formats: {
    title: "MMMM YYYY",
    weekdays: "WW",
    navMonths: "MMM",
    input: ["D-M", "D-M", "DD-MM-YYYY", "DD/MM/YYYY"],
    dayPopover: "L",
    data: ["L", "YYYY-MM-DD", "YYYY/MM/DD"]
  },
  datePickerTintColor: "#0070b8",
  datePickerShowDayPopover: false,
  popoverExpanded: true,
  popoverVisibility: "focus",
  popoverKeepVisibleOnInput: true
});

new Vue({
  render: h => h(App)
}).$mount("#app");
