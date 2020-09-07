import { get, put } from "@/utils/service";
class Article {
  // 获取所有文章
  async getArticles(params = {}) {
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
  async getArticleDetail(id) {
    const res = await get(`/fxblog/article/get/${id}`);
    return res;
  }

  // 点赞文章
  async likeArticle(id) {
    const res = await put(`/fxblog/article/like/${id}`);
    return res;
  }

  // 搜索文章
  async searchArticles(key) {
    const res = await get(`/fxblog/article/search/${key}`);
    return res;
  }
}

export default new Article();
