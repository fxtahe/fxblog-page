import { get } from "@/utils/service";

class Tag {
  // 获取所有文章
  async getTags() {
    const res = await get("/fxblog/tag/tags");
    return res;
  }
}
export default new Tag();
