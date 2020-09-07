import article from "@/api/article";
const state = () => ({
  articles: [],
  featureArticles: [],
  searchArticles: [],
  total: 0,
  loading: false,
  article: null,
  page: 0,
  archive: {}
});

const mutations = {
  SET_ARTICLES: (state, { articles }) => {
    state.articles = articles;
  },
  SET_HOME_ARTICLES: (state, { articles, total, featureArticles }) => {
    state.articles = articles;
    state.total = total;
    state.featureArticles = featureArticles;
  },
  SET_SEARCH_ARTICLES: (state, searchArticles) => {
    state.searchArticles.pop();
    state.searchArticles = searchArticles;
  },
  SET_MORE_ARTICLES: (state, { articles }) => {
    state.articles = state.articles.concat(articles);
  },
  SET_ARTICLE: (state, articles) => {
    state.articles = articles;
  },
  SET_LOADING: (state, loading) => {
    state.loading = loading;
  },
  SET_ARTICLE_DETAIL: (state, article) => {
    state.article = article;
  },
  SET_ARCHIVE_ARTICLE: (state, archive) => {
    state.archive = archive;
  }
};
const actions = {
  async getHomeArticles({ commit }, params) {
    try {
      const { data: featureArticles } = await article.getFeatureArticles();
      const {
        data: { data: articles, total }
      } = await article.getArticles(params);

      commit("SET_HOME_ARTICLES", { articles, total, featureArticles });
    } catch (e) {
      // eslint-disable-next-line no-console
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
  async getArticleDetail({ commit }, params) {
    try {
      const { data } = await article.getArticleDetail(params);
      commit("SET_ARTICLE_DETAIL", data);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  },
  async searchArticles({ commit }, key) {
    try {
      if (key == "") {
        commit("SET_SEARCH_ARTICLES", new Array());
      } else {
        const { data } = await article.searchArticles(key);
        commit("SET_SEARCH_ARTICLES", data);
      }
    } catch (e) {
      console.log(e);
    }
  },
  async getArchive({ commit }) {
    try {
      const { data: archive } = await article.getArchive();
      commit("SET_ARCHIVE_ARTICLE", archive);
    } catch (e) {
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
