import { get, put } from "@/utils/service";
class Article {
  // 获取所有文章
  async getArticles(params = {}) {
    // let query = {
    //   categoryId: params.categoryId ? params.categoryId : 0,
    //   authorId: params.authorId ? params.authorId : 0,
    //   tagId: params.tagId ? params.tagId : 0,
    //   page: params.page ? params.page : 0
    // };
    // if (params.search) {
    //   query.search = params.search;
    // }
    const res = await get("/fxblog/article/page", params);
    return res;
  }

  // 获取所有精选文章
  async getFeatureArticles() {
    const res = await get("/fxblog/article/feature");
    return res;
  }

  // 获取历史归档
  async getArchive() {
    const res = await get("/fxblog/article/archive");
    return res;
  }

  // 获取某篇文章详情
  async getArticleDetail(query) {
    const res = await get("/fxblog/article", query);
    return res;
  }

  // 点赞文章
  async likeArticle(id) {
    const res = await put(`/fxblog/article/like/${id}`);
    return res;
  }

  // 搜索文章
  async searchArticles(params) {
    let query = {
      page: params.page ? params.page : 0,
      search: params.search
    };
    const res = await get("v1/blog/article/search/articles", query);
    return res;
  }
}

export default new Article();
