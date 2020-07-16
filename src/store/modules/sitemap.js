import article from "@/api/article";
//import tag from "@/api/tag";
//import category from "@/api/category";
import author from "@/api/author";

const state = () => ({
  tags: [],
  categories: [],
  authors: [],
  author: {},
  loading: false,
  total: 0,
  category: {},
  articles: []
});
const mutations = {
  SET_TAGSANDCATEGORIES: (state, { tags, categories }) => {
    state.tags = tags;
    state.categories = categories;
  },
  SET_AUTHORS: (state, { authors }) => {
    state.authors = authors;
  },
  SET_AUTHOR_INFO: (state, { author }) => {
    state.author = author;
  },
  SET_AUTHOR_DETAIL: (state, { author }) => {
    state.author = author;
  }
};
const actions = {
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
  },
  async getAuthorsInfo({ commit }) {
    try {
      const authors = await author.getAuthorsInfo();

      const authorInfo = authors[0];
      const categories = authorInfo.categories;
      const tags = authorInfo.tags;
      commit("SET_AUTHOR_INFO", { authorInfo });
      commit("SET_TAGSANDCATEGORIES", { tags, categories });
      commit("SET_AUTHORS", { authors });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  },
  setTagsAndCatrgories({ commit }, tags, categories) {
    commit("SET_TAGSANDCATEGORIES", { tags, categories });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
