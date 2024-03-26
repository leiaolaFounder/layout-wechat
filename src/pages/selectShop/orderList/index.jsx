import LaScrollView from "@components/ScrollView/index";
import { View, Image } from "@tarojs/components";
import { navigateTo, useDidShow } from "@tarojs/taro";
import { useFeatch } from "@hooks/fetch";
import { useState, useEffect, useRef } from "react";
import "./index.scss";

const OrderList = () => {
  const featch = useFeatch();
  const [orderDataList, setOrderDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const dataRef = useRef();
  useDidShow(() => {
    initData();
  });
  useEffect(() => {
    if (pageNo == 1) return;
    initData();
  }, [pageNo]);
  const refresh = async () => {
    setIsRefreshing(true);
    setOrderDataList(() => []);
    initData("refresh");
    setPageNo(1);
  };

  const loadMore = async () => {
    if (isLoading) return;
    await setPageNo(pageNo + 1);
    setIsLoading(true);
  };
  const initData = async (key) => {
    const {
      data: { orderList },
    } = await featch("get", "/orders/orderList", {
      pageNo: pageNo,
      pageSize: 10,
    });
    if (orderList.length) {
      await setOrderDataList(() => {
        if (key == "refresh") {
          return [...orderList];
        }
        return [...orderList, ...orderDataList];
      });
      pageNo == 1 ? setIsRefreshing(false) : setIsLoading(false);
    }
  };

  const jumpShopDetail = (id) => {
    const url = `/pages/shopDetail/index?shopId=${id}`;
    navigateTo({
      url,
    });
  };
  return (
    <LaScrollView
      isRefreshing={isRefreshing}
      refresh={refresh}
      loadMore={loadMore}
      initData={initData}
    >
      <View className="shop-list">
        <View className="shop-item" onClick={jumpShopDetail}>
          <Image src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
          <View className="shop-title">宽窄巷子</View>
          <View className="shop-describe">超级好吃正经东北菜</View>
        </View>
        <View className="shop-item">
          <Image src="https://p.qqan.com/up/2024-3/17110862844127363.jpg" />
          <View className="shop-title">宽窄巷子</View>
          <View className="shop-describe">超级好吃正经东北菜</View>
        </View>
        <View className="shop-item">
          <Image src="https://p.qqan.com/up/2024-3/17110862851308133.jpg" />
          <View className="shop-title">宽窄巷子</View>
          <View className="shop-describe">超级好吃正经东北菜</View>
        </View>
      </View>
    </LaScrollView>
  );
};
export default OrderList;
