import { View, Text, Image } from "@tarojs/components";
import "taro-ui/dist/style/components/icon.scss";
import { useLoad, navigateBack } from "@tarojs/taro";
import MytOrderList from "./orderList/index";
import { AtTabs, AtTabsPane } from "taro-ui";
import { useState } from "react";
import { useFetch } from "@hooks/fetch";
import "./index.scss";

const myOrder = () => {
  const fetch = useFetch();
  useLoad(() => {
    getMyOrder();
  });
  const [tabList] = useState([
    { title: "全部" },
    { title: "进行中" },
    { title: "申请审核" },
    { title: "已完成" },
  ]);
  const [myOrderList, setMyOrderList] = useState(null);
  const [current, setCurrent] = useState(0);
  const thandleClick = (value) => {
    setCurrent(value);
  };
  const getMyOrder = async () => {
    const orderList = await fetch("get", "/orders/myOrder");
    setMyOrderList(orderList);
  };
  return (
    <View className="my-order">
      <AtTabs current={current} tabList={tabList} onClick={thandleClick}>
        {myOrderList && <MytOrderList myOrderList={myOrderList} />}
      </AtTabs>
    </View>
  );
};
export default myOrder;
