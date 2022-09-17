import { createStore } from "vuex";
// import AuthModule from "@/core/store/modules/AuthModule";
import CounterModule from "@/core/store/modules/CounterModule";

console.log(CounterModule, "CounterModule");
// Create a new store instance.
const store = createStore({
  modules: {
    // AuthModule,
    CounterModule,
  },
});

export default store;
