import { View, Text } from "@tarojs/components";
import { navigateBack } from "@tarojs/taro";
import "taro-ui/dist/style/components/icon.scss";
import Header from "@components/Header/index";
import MytOrderList from "./orderList/index";
import { AtTabs } from "taro-ui";
import { useState, useRef } from "react";
import "./index.scss";

const myPublisHorders = () => {
  const [tabList] = useState([
    { title: "全部" },
    { title: "进行中" },
    { title: "待审核" },
    { title: "已审核" },
  ]);
  const [current, setCurrent] = useState(0);
  const mytOrderListRef = useRef(null);
  const thandleClick = (value) => {
    setCurrent(value);
  };
  return (
    <View className="my-order">
      <Header>
        <View className="header-content">
          <Text
            className="at-icon at-icon-chevron-left"
            onClick={() => navigateBack(-1)}
          ></Text>
          <Text>我发布的</Text>
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
export default myPublisHorders;
