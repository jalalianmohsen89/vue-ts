import { createStore } from "vuex";
import AuthModule from "@/core/store/modules/AuthModule";

// Create a new store instance.
const store = createStore({
  modules: {
    AuthModule,
  },
});

export default store;
