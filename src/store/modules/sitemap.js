import article from "@/api/article";
import tag from "@/api/tag";
import category from "@/api/category";
const state = () => ({
  tags: [],
  categories: [],
  loading: false,
  category: {},
  articles: []
});
const mutations = {
  SET_ARTICLES: (state, { tags, categories }) => {
    state.tags = tags;
    state.categories = categories;
  }
};
const actions = {
  async getTagAndCategories({ commit }) {
    try {
      const tags = await tag.getTags();
      const categories = await category.getCategories();
      commit("setTagAndCategories", { tags, categories });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  },
  async getMoreArticles({ commit }, params) {
    try {
      commit("setLoading", true);
      const { articles } = await article.getArticles(params);
      commit("setMoreArticles", { articles });
      commit("setLoading", false);
    } catch (e) {
      commit("setLoading", false);
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
