import article from "@/api/article";
import authorService from "@/api/author";

const state = () => ({
  tags: [],
  categories: [],
  authors: [],
  author: null,
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
  SET_ARTICLES: (state, { articles, total }) => {
    state.articles = articles;
    state.total = total;
  },
  SET_AUTHORS: (state, { authors }) => {
    state.authors = authors;
  },
  SET_AUTHOR_INFO: (state, { author }) => {
    state.author = author;
  },
  SET_AUTHOR_DETAIL: (state, { author }) => {
    state.author = author;
  },
  SET_CATEGORY: (state, { category }) => {
    state.category = category;
  },
  SET_MORE_ARTICLES(state, { articles }) {
    state.articles = state.articles.concat(articles);
  },
  SET_LOADING(state, { loading }) {
    state.loading = loading;
  }
};
const actions = {
  async getArticles({ commit }, params) {
    try {
      const {
        data: { data: articles, total }
      } = await article.getArticles(params);
      console.log(articles);
      console.log(total);
      commit("SET_ARTICLES", { articles, total });
    } catch (e) {
      console.log(e);
    }
  },

  async getMoreArticles({ commit }, params) {
    try {
      commit("SET_LOADING", true);
      const {
        data: { data: articles }
      } = await article.getArticles(params);
      commit("SET_MORE_ARTICLES", { articles });
      commit("SET_LOADING", false);
    } catch (e) {
      commit("SET_LOADING", false);
      // eslint-disable-next-line no-console
      console.log(e);
    }
  },
  async setCategory({ commit }, category) {
    commit("SET_CATEGORY", { category });
  },
  async getAuthorsInfo({ commit }) {
    try {
      const authors = await authorService.getAuthorsInfo();

      const author = authors[0];
      const categories = author.categories;
      const tags = author.tags;
      console.log(author);
      commit("SET_AUTHOR_INFO", { author });
      commit("SET_TAGSANDCATEGORIES", { tags, categories });
      commit("SET_AUTHORS", { authors });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  },
  async setAuthorInfo({ commit }, author) {
    commit("SET_AUTHOR_INFO", { author });
    const tags = author.tags;
    const categories = author.categories;
    commit("SET_TAGSANDCATEGORIES", { tags, categories });
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
