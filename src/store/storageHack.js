import {
  getStorage,
  setStorage,
  removeStorage,
  clearStorage,
} from "@tarojs/taro";

export default {
  setItem(key, data) {
    return setStorage({ key, data });
  },
  async getItem(key) {
    const res = await getStorage({ key });
    return res.data;
  },
  removeItem(key) {
    return removeStorage({ key });
  },
  clear: clearStorage,
};
