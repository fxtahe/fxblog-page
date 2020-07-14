import { get } from "@/utils/service";
class Category {
  async getCategories() {
    const res = await get("/fxblog/category/categories");
    return res;
  }
}
export default new Category();
