import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app";
import article from "./modules/article";
import sitemap from "./modules/sitemap";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    article,
    sitemap
  }
});
export default store;
