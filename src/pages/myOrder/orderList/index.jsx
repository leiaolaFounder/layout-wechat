import { View, Text, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";
import { useLoad, navigateTo } from "@tarojs/taro";
import "./index.scss";

const OrderList = (props) => {
  console.log(props);
  const sizeColor = {
    purple: "#7f6ecb",
    grey: "#999999",
    black: "#333333",
  };
  const jumpOrderDetail = () => {
    const url = "/pages/orderDetail/index";
    navigateTo({
      url,
    });
  };
  return (
    <View className="order-list">
      <View className="order-list-item" onClick={jumpOrderDetail}>
        <View className="order-top-title">
          <Text>发布人：小伙子</Text>
          <Text>审核中</Text>
        </View>
        <View className="order-top">
          <View className="order-list-left">
            <View className="order-title">这是一个订单</View>
            <View className="order-notes">这是一个描述一二三</View>
          </View>
        </View>
        <View className="order-content">
          <View className="order-time">发单时间：2022-10-11</View>
        </View>
        <View className="order-operate">
          <AtButton circle={true}>取消订单</AtButton>
          <AtButton type="secondary" circle={true}>
            上传订单
          </AtButton>
        </View>
      </View>
    </View>
  );
};
export default OrderList;
