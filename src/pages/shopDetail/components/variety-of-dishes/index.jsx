import { View, Image, Button } from "@tarojs/components";
import { AtButton, AtList, AtListItem, AtToast } from "taro-ui";
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
              <View>
                <View>123123</View>
                <View>
                  <View>123123</View>
                  <View>123123</View>
                </View>
              </View>
            </View>
          </View>
        </AtTabsPane>
      </AtTabs>
    </View>
  );
};
export default Introduce;
