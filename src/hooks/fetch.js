import { request, showToast, showModal, navigateTo } from "@tarojs/taro";
import { useAppSelector, useAppDispatch } from "@hooks/store";

export const useFetch = () => {
  const token = useAppSelector((state) => state.user.token);

  return async (method, url, data) => {
    return await new Promise((resolve, reject) => {
      console.log(process.env.BASE_URL);
      request({
        url: `${process.env.BASE_URL}${url}`,
        method,
        data,
        header: {
          token,
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
