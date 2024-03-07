import LaScrollView from "@components/ScrollView/index";
import { View, Text, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";
import { navigateTo, useDidShow } from "@tarojs/taro";
import { useFeatch } from "@hooks/fetch";
import { useState } from "react";
import dayjs from "dayjs";
import "./index.scss";

const OrderList = () => {
  const featch = useFeatch();
  const [orderDataList, setOrderDataList] = useState(null);
  useDidShow(() => {
    initData();
  });

  const grabOrder = async (e, id) => {
    e.stopPropagation();
    await featch("post", "/orders/chageOrderState", {
      state: "IN_PROGRESS",
      order_id: id,
    });
  };
  const initData = async (pageNo, pageSize) => {
    const {
      data: { orderList },
    } = await featch("get", "/orders/orderList", {
      pageNo,
      pageSize,
    });
    setOrderDataList(orderList);
  };
  const jumpOrderDetail = (id) => {
    const url = `/pages/orderDetail/index?orderId=${id}`;
    navigateTo({
      url,
    });
  };
  return (
    <View className="order-list">
      <LaScrollView initData={initData}>
        {orderDataList
          ? orderDataList.map((item) => (
              <View
                className="order-list-item"
                onClick={() => jumpOrderDetail(item.id)}
              >
                <View className="order-top">
                  <View className="order-list-left">
                    <View className="order-title">{item?.title}</View>
                    <View className="order-notes">{item?.describe}</View>
                  </View>
                  <View className="order-list-right">
                    <AtButton
                      type="secondary"
                      onClick={(e) => grabOrder(e, item.id)}
                      circle={true}
                    >
                      抢单
                    </AtButton>
                  </View>
                </View>
                <View className="order-bottom">
                  <View className="order-time">
                    发单时间：{dayjs(item.createdAt).format("YYYY-MM-DD HH:mm")}
                  </View>
                  <View className="order-price">${item.order_price}</View>
                </View>
              </View>
            ))
          : null}
      </LaScrollView>
    </View>
  );
};
export default OrderList;
