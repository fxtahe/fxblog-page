import { get } from "@/utils/service";

class Author {
  async getAuthorsInfo() {
    let { data } = await get("/fxblog/authorInfo/list");
    return data;
  }
}
export default new Author();
