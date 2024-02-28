import { View, Text } from "@tarojs/components";
import OrderList from "./orderList/index";
import Header from "../../components/Header/index";
import { useDidShow, reLaunch } from "@tarojs/taro";
import { useFetch } from "@hooks/fetch";
import { useAppSelector } from "@hooks/store";
import { useState } from "react";
import "./index.scss";

const Index = () => {
  const fetch = useFetch();
  const token = useAppSelector((state) => state.user.token);
  const [orderDataList, setOrderDataList] = useState(null);
  useDidShow(() => {
    if (token) {
      getOrderList();
      return;
    }
    reLaunch({
      url: "/pages/login/index",
    });
  });
  const getOrderList = async () => {
    const {
      data: { orderList },
    } = await fetch("get", "/orders/orderList");
    setOrderDataList(orderList);
  };
  return (
    <View className="index">
      <Header>
        <View className="header-content">
          <Text></Text>
          <Text>LAYOUT</Text>
          <Text></Text>
        </View>
      </Header>
      {orderDataList && <OrderList orderList={orderDataList} />}
    </View>
  );
};
export default Index;
