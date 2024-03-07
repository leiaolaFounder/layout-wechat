import { View, Text, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";
import { useDidShow, navigateTo } from "@tarojs/taro";
import { useState } from "react";
import { useFeatch } from "@hooks/fetch";
import "./index.scss";

const PublisOrderList = () => {
  const featch = useFeatch();
  const [publisList, setPublisList] = useState(null);
  const sizeColor = {
    purple: "#7f6ecb",
    grey: "#999999",
    black: "#333333",
  };
  useDidShow(() => {
    getPublisList();
  });
  const getPublisList = async () => {
    const { data } = await featch("get", "/orders/myPublisher");
    setPublisList(data);
  };
  const jumpOrderDetail = () => {
    const url = "/pages/orderDetail/index";
    navigateTo({
      url,
    });
  };
  return (
    <View className="order-list">
      {publisList
        ? publisList.map((item) => (
            <View className="order-list-item" onClick={jumpOrderDetail}>
              <View className="order-top-title">
                <Text>发布人：自己</Text>
                <Text>审核中</Text>
              </View>
              <View className="order-top">
                <View className="order-list-left">
                  <View className="order-title">{item.title}</View>
                  <View className="order-notes">{item.notes}</View>
                </View>
              </View>
              <View className="order-content">
                <View className="order-time">发单时间：{item.createdAt}</View>
              </View>
              <View className="order-operate">
                <AtButton circle={true}>取消订单</AtButton>
                <AtButton type="secondary" circle={true}>
                  上传订单
                </AtButton>
              </View>
            </View>
          ))
        : null}
    </View>
  );
};
export default PublisOrderList;
