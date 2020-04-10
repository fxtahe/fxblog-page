const state = () => ({
  theme: "light",
  showSearch: false
});

const mutations = {
  setTheme: (state, theme) => {
    document.body.id = theme;
    window.localStorage.setItem("THEME", theme);
    state.theme = theme;
  },
  setShowSearch: (state, showSearch) => {
    state.showSearch = showSearch;
  }
};

const actions = {
  setTheme({ commit }, theme) {
    commit("setTheme", theme);
  },
  setShowSearch({ commit }, showSearch) {
    commit("setShowSearch", showSearch);
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
