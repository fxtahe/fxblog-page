import article from "@/api/article";
const state = () => ({
  articles: [],
  featureArticles: [],
  total: 0,
  loading: false,
  article: null,
  page: 0
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
  }
};
const actions = {
  async getHomeArticles({ commit }, params) {
    try {
      const { data: featureArticles } = await article.getFeatureArticles();

      console.log(featureArticles);

      const {
        data: { data: articles, total }
      } = await article.getArticles(params);
      console.log(articles);

      commit("SET_HOME_ARTICLES", { articles, total, featureArticles });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  },
  async getMoreArticles({ commit }, params) {
    try {
      commit("setLoading", true);
      const { data } = await article.getArticles(params);
      commit("setMoreArticles", { data });
      commit("setLoading", false);
    } catch (e) {
      commit("setLoading", false);
      // eslint-disable-next-line no-console
      console.log(e);
    }
  },
  async getArticleDetail({ commit }, params) {
    try {
      const result = await article.getArticleDetail(params);
      commit("setArticleDetail", result);
    } catch (e) {
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
