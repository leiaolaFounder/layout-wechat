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
  const [isLoading, setIsLoading] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const statusMap = {
    IN_PROGRESS: "进行中",
    IN_APPROVAL: "审核中",
    COMPLETED: "已完成",
    canceled: "已取消",
  };
  const initData = async () => {
    const currentMap = {
      0: "",
      1: "IN_PROGRESS",
      2: "IN_APPROVAL",
      3: "COMPLETED",
    };

    const { data } = await fetch("get", "/orders/myOrder", {
      completionStatus: currentMap[props.current],
      isAssignee: 2,
      pageNo,
      pageSize: 10,
    });
    setMyOrderList(() => {
      if (key == "current") {
        return [...(data || [])];
      }
      return [...myOrderList, ...(data || [])];
    });
    setIsLoading(false);
  };

  const loadMore = async () => {
    if (isLoading) return;
    setIsLoading(true);
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    initData();
  }, [pageNo]);
  useEffect(() => {
    setPageNo(1);
    initData("current");
  }, [props.current]);
  const jumpOrderDetail = () => {
    const url = "/pages/orderDetail/index";
    navigateTo({
      url,
    });
  };
  return (
    <View className="order-list">
      <LaScrollView
        refresherEnabled={false}
        loadMore={loadMore}
        initData={initData}
        PAGEPDH={88}
      >
        {myOrderList &&
          myOrderList.map((item) => (
            <View className="order-list-item" onClick={jumpOrderDetail}>
              <View className="order-top-title">
                <Text>发布人：小伙子</Text>
                <Text>{statusMap[item.completion_status]}</Text>
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
                {item.completion_status == "IN_PROGRESS" && (
                  <AtButton type="secondary" circle={true}>
                    上传订单
                  </AtButton>
                )}
              </View>
            </View>
          ))}
      </LaScrollView>
    </View>
  );
};
export default OrderList;
