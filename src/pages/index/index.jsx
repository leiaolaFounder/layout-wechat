import { View, Text } from "@tarojs/components";
import OrderList from "./orderList/index";
import Header from "@components/Header/index";
import { useDidShow, reLaunch } from "@tarojs/taro";

import { useAppSelector } from "@hooks/store";
import "./index.scss";

const Index = () => {
  const userInfo = useAppSelector((state) => state?.user?.userInfo);
  console.log(userInfo);
  useDidShow(() => {
    if (!userInfo.token) {
      reLaunch({
        url: "/pages/login/index",
      });
    }
  });

  return (
    <View className="index">
      <Header>
        <View className="header-content">
          <Text></Text>
          <Text>LAYOUT</Text>
          <Text></Text>
        </View>
      </Header>
      <OrderList />
    </View>
  );
};
export default Index;
