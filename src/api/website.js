import { get } from "@/utils/service";
class Website {
  async getWebsite() {
    const res = await get("/website/get");
    return res;
  }
}

export default new Website();
