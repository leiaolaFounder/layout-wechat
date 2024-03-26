import { View, Text } from "@tarojs/components";
import OrderList from "./orderList/index";
import Header from "@components/Header/index";
import { useDidShow, navigateTo } from "@tarojs/taro";
import { AtSearchBar } from "taro-ui";
import { useAppSelector } from "@hooks/store";
import "./index.scss";

const SelectShop = () => {
  const userInfo = useAppSelector((state) => state?.user?.userInfo);

  return (
    <View className="index">
      <Header>
        <View className="header-content">
          <Text></Text>
          <Text>SHOP</Text>
          <Text></Text>
        </View>
      </Header>
      <View className="search">
        <AtSearchBar placeholder="搜索店铺" />
      </View>

      <OrderList />
    </View>
  );
};
export default SelectShop;
