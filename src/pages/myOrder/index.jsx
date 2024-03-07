import { View, Text, Image } from "@tarojs/components";
import "taro-ui/dist/style/components/icon.scss";
import Header from "@components/Header/index";
import MytOrderList from "./orderList/index";
import { AtTabs } from "taro-ui";
import { useState, useRef } from "react";
import "./index.scss";

const myOrder = () => {
  const [tabList] = useState([
    { title: "全部" },
    { title: "进行中" },
    { title: "申请审核" },
    { title: "已完成" },
  ]);
  const [current, setCurrent] = useState(0);
  const mytOrderListRef = useRef(null);
  const thandleClick = (value) => {
    setCurrent(value);
    console.log(mytOrderListRef);
  };
  return (
    <View className="my-order">
      <Header>
        <View className="header-content">
          <Text></Text>
          <Text>我的订单</Text>
          <Text></Text>
        </View>
      </Header>
      <View className="tab">
        <AtTabs
          current={current}
          tabList={tabList}
          onClick={thandleClick}
        ></AtTabs>
      </View>
      <MytOrderList ref={mytOrderListRef} current={current} />
    </View>
  );
};
export default myOrder;
