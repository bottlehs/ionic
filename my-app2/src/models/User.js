import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;
export default class User {
  id = null;
  name = null;
  email = null;
  constructor(data = {}) {
    Object.assign(this, data);
  }
  static async current() {
    try {
      let item = await Storage.get({
        key: "user"
      });
      if (item) {
        let json = JSON.parse(item.value);
        return new User(json);
      }
      return null;
    } catch (error) {
      return null;
    }
  }
}
