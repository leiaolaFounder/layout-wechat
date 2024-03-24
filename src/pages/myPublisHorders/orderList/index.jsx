import { View, Text, Block } from "@tarojs/components";
import LaScrollView from "@components/ScrollView/index";
import { useFeatch } from "@hooks/fetch";
import { AtButton } from "taro-ui";
import { navigateTo } from "@tarojs/taro";
import "./index.scss";
import { useState, useEffect, useRef } from "react";

const OrderList = (props) => {
  const fetch = useFeatch();
  const [myOrderList, setMyOrderList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const statusMap = {
    IN_PROGRESS: "进行中",
    IN_APPROVAL: "审核中",
    COMPLETED: "已审核",
    canceled: "已取消",
  };
  const initData = async () => {
    const currentMap = {
      0: "",
      1: "IN_PROGRESS",
      2: "IN_APPROVAL",
      3: "COMPLETED",
    };
    const { data } = await fetch("get", "/orders/myPublisher", {
      completionStatus: currentMap[props.current],
      isAssignee: 2,
      pageNo,
      pageSize: 10,
    });
    if (data?.length) {
      setMyOrderList([...myOrderList, ...data]);
      setIsLoading(false);
    }
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
    setMyOrderList([]);
    setPageNo(1);
  }, [props.current]);

  useEffect(() => {
    if (!myOrderList.length) {
      initData();
    }
  }, [myOrderList]);

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
                <View style={{ display: "flex" }}>
                  {item.completion_status == "IN_APPROVAL" && (
                    <Block>
                      <AtButton type="secondary" circle={true}>
                        审核驳回
                      </AtButton>
                      <AtButton type="secondary" circle={true}>
                        通过审核
                      </AtButton>
                    </Block>
                  )}
                  {item.completion_status == "IN_PROGRESS" && (
                    <Block>
                      {item.order_assignee_id ? (
                        <AtButton type="secondary" circle={true}>
                          取消订单
                        </AtButton>
                      ) : (
                        <AtButton type="secondary" circle={true}>
                          删除订单
                        </AtButton>
                      )}
                    </Block>
                  )}
                </View>
              </View>
            </View>
          ))}
      </LaScrollView>
    </View>
  );
};
export default OrderList;
