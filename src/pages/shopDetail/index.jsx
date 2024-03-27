import { View, Text, Image } from "@tarojs/components";
import Header from "../../components/Header/index";
import Introduce from "./components/introduce/index";
import VarietyOfDishes from "./components/variety-of-dishes/index";
import { useLoad, navigateBack } from "@tarojs/taro";
import { useState } from "react";
import { useFeatch } from "@hooks/fetch";
import { AtTabs, AtTabsPane } from "taro-ui";
import "./index.scss";

const ShopDetail = () => {
  const tabList = [{ title: "店铺介绍" }, { title: "菜品" }];

  const [orderId, setOrderId] = useState();
  const [orderDetail, setOrderDetail] = useState();
  const fetch = useFeatch();
  useLoad(({ orderId }) => {
    setOrderId(orderId);
    getOrderDetail(orderId);
  });
  const [current, setCurrent] = useState(0);

  const thandleClick = (value) => {
    console.log(value);
    setCurrent(value);
  };
  const getOrderDetail = async (orderId) => {
    // const { data } = await fetch("get", "/orders/orderDetail", {
    //   order_id: orderId,
    // });
    // setOrderDetail(data);
  };
  return (
    <View className="order-detail">
      <Header>
        <View className="header-content">
          <Text
            onClick={() => navigateBack(-1)}
            className="at-icon at-icon-chevron-left"
          ></Text>
          <Text>点餐</Text>
          <Text></Text>
        </View>
      </Header>

      <View className="content">
        <View className="tab">
          <AtTabs
            current={current}
            onClick={thandleClick}
            tabList={tabList}
          ></AtTabs>
        </View>

        {current == 0 && <Introduce />}
        {current == 1 && <VarietyOfDishes />}
      </View>
    </View>
  );
};
export default ShopDetail;
