import LaScrollView from "@components/ScrollView/index";
import { View } from "@tarojs/components";
import { navigateTo } from "@tarojs/taro";
import { useFeatch } from "@hooks/fetch";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import "./index.scss";

const OrderList = () => {
  const featch = useFeatch();
  const [orderDataList, setOrderDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    initData();
  }, [pageNo]);
  useEffect(() => {
    if (!orderDataList.length) {
      initData();
      return;
    }
  }, [orderDataList]);
  const refresh = async () => {
    setIsRefreshing(true);
    setOrderDataList([]);
    setPageNo(1);
  };

  const loadMore = async () => {
    if (isLoading) return;
    await setPageNo(pageNo + 1);
    setIsLoading(true);
  };
  const initData = async () => {
    const {
      data: { orderList },
    } = await featch("get", "/orders/orderList", {
      pageNo: pageNo,
      pageSize: 10,
    });

    if (orderList.length) {
      await setOrderDataList([...orderDataList, ...orderList]);
    }
    pageNo == 1 ? setIsRefreshing(false) : setIsLoading(false);
  };

  const jumpOrderDetail = (id) => {
    const url = `/pages/orderDetail/index?orderId=${id}`;
    navigateTo({
      url,
    });
  };
  return (
    <View className="order-list">
      <LaScrollView
        isRefreshing={isRefreshing}
        refresh={refresh}
        loadMore={loadMore}
        initData={initData}
      >
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
                  {/* <View className="order-list-right">
                    <AtButton
                      type="secondary"
                      onClick={(e) => grabOrder(e, item.id)}
                      circle={true}
                    >
                      抢单
                    </AtButton>
                  </View> */}
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
