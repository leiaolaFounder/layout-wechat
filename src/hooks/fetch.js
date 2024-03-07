import { request, getStorageSync, showModal, navigateTo } from "@tarojs/taro";
import { useAppSelector, useAppDispatch } from "@hooks/store";

export const useFeatch = () => {
  const userInfo = useAppSelector((state) => state.user.userInfo);
  return async (method, url, data) => {
    return await new Promise((resolve, reject) => {
      console.log(process.env.BASE_URL);
      request({
        url: `${process.env.BASE_URL}${url}`,
        method,
        data,
        header: {
          token: userInfo.token,
          userId: userInfo.id,
        },
        success: (res) => {
          const result = res.data;
          console.log(result);
          resolve(result);
        },
        fail: (err) => {
          reject([undefined, err]);
        },
      });
    });
  };
};
