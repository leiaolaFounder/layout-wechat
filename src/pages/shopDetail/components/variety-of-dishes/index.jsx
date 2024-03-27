import { View, Image, Button } from "@tarojs/components";
import { AtInputNumber, AtFloatLayout, AtSwitch, AtInput } from "taro-ui";

import { navigateBack } from "@tarojs/taro";
import { useFeatch } from "@hooks/fetch";
import { useState } from "react";
import dayjs from "dayjs";
import { AtTabs, AtTabsPane } from "taro-ui";
import "./index.scss";
const Introduce = ({ orderDetail }) => {
  const featch = useFeatch();
  const [toast, setToast] = useState(false);
  const tabList2 = [{ title: "盖饭" }, { title: "饮品" }];
  const [current2, setCurrent2] = useState(0);
  const thandleClick2 = (value) => {
    setCurrent2(value);
  };
  const grabOrder = async (id) => {
    await featch("post", "/orders/chageOrderState", {
      state: "IN_PROGRESS",
      order_id: orderDetail.id,
    });
    setToast(true);
    setTimeout(() => {
      navigateBack(-1);
      setToast(false);
    }, 1000);
  };

  return (
    <View className="variety-of-dishes">
      <AtFloatLayout isOpened>
        <AtSwitch title="是否需要配送" />
        <View>
          <View>地址：</View>
          <AtInput />
        </View>
        <View>
          <View>手机号：</View>
          <AtInput />
        </View>
        <View>
          <View>配送费：</View>
          <AtInput />
        </View>
        <View>
          <View>查看商家码：</View>
          <AtInput />
        </View>
        <View>
          <View>菜品</View>
          <AtInput />
        </View>
      </AtFloatLayout>
      <AtTabs
        scroll
        height="100%"
        tabDirection="vertical"
        tabList={tabList2}
        current={current2}
        onClick={thandleClick2}
      >
        <AtTabsPane tabDirection="vertical" index={0}>
          <View className="vertical-content">
            <View className="vertical-item-la">
              <Image src="https://p.qqan.com/up/2024-3/17110862851308133.jpg" />
              <View className="vertical-item-right">
                <View>123123</View>
                <View className="vertical-right-bottom">
                  <View>123123</View>
                  <AtInputNumber />
                </View>
              </View>
            </View>
          </View>
        </AtTabsPane>
        <AtTabsPane tabDirection="vertical" index={1}>
          <View className="vertical-content">
            <View className="vertical-item-la">
              <Image src="https://p.qqan.com/up/2024-3/17110862851308133.jpg" />
              <View className="vertical-item-right">
                <View>123123</View>
                <View className="vertical-right-bottom">
                  <View>123123</View>
                  <AtInputNumber />
                </View>
              </View>
            </View>
          </View>
        </AtTabsPane>
      </AtTabs>
      <View className="order-settlement">
        <View className="settlement-left">
          <View>¥9.8</View>
          <View></View> <View>预估配送费：3.8</View>
        </View>
        <View className="settlement-right">
          {/* <View>¥15起送</View> */}
          <View className="settlement-btn">结算</View>
        </View>
      </View>
    </View>
  );
};
export default Introduce;
