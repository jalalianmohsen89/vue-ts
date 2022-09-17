interface counterState {
  count: number;
}

export default {
  namespace: true,
  state: () => ({
    count: 0,
  }),
  actions: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    incrementCounter({ commit }) {
      commit("increment");
    },
  },
  mutations: {
    increment(state: counterState) {
      state.count++;
    },
  },
};
