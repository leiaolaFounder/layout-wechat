import { View, Text } from "@tarojs/components";
import LaScrollView from "@components/ScrollView/index";
import { useFeatch } from "@hooks/fetch";
import { AtButton } from "taro-ui";
import { navigateTo } from "@tarojs/taro";
import "./index.scss";
import { useState, useEffect } from "react";

const OrderList = (props) => {
  const fetch = useFeatch();
  const [myOrderList, setMyOrderList] = useState([]);
  const [completionStatus, setCompletionStatus] = useState("");
  const getMyOrder = async (pageNo, pageSize) => {
    const orderList = await fetch("get", "/orders/myOrder", {
      completionStatus,
      pageNo,
      pageSize,
    });
    setMyOrderList(orderList);
  };
  useEffect(() => {
    const currentMap = {
      0: "",
      1: "IN_PROGRESS",
      2: "IN_APPROVAL",
      3: "COMPLETED",
    };
    setCompletionStatus(currentMap[props.current]);
  }, [props.current]);

  const jumpOrderDetail = () => {
    const url = "/pages/orderDetail/index";
    navigateTo({
      url,
    });
  };
  return (
    <View className="order-list">
      <LaScrollView initData={getMyOrder} PAGEPDH={88}>
        {myOrderList.data &&
          myOrderList.data.map((item) => (
            <View className="order-list-item" onClick={jumpOrderDetail}>
              <View className="order-top-title">
                <Text>发布人：小伙子</Text>
                <Text>审核中</Text>
              </View>
              <View className="order-top">
                <View className="order-list-left">
                  <View className="order-title">{item.title}</View>
                  <View className="order-notes">{item.describe}</View>
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
          ))}
      </LaScrollView>
    </View>
  );
};
export default OrderList;
