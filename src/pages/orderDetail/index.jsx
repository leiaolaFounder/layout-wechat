import { View, Text, Image } from "@tarojs/components";
import Header from "../../components/Header/index";
import BasicInformation from "./component/basic-information";
import "taro-ui/dist/style/components/icon.scss";
import { useLoad, navigateBack } from "@tarojs/taro";
import { useState } from "react";
import { useFetch } from "@hooks/fetch";
import "./index.scss";

const OrderDetail = () => {
  const [orderId, setOrderId] = useState();
  const [orderDetail, setOrderDetail] = useState();
  const fetch = useFetch();
  useLoad(({ orderId }) => {
    setOrderId(orderId);
    getOrderDetail(orderId);
  });
  const getOrderDetail = async (orderId) => {
    const { data } = await fetch("get", "/orders/orderDetail", {
      order_id: orderId,
    });
    setOrderDetail(data);
  };
  return (
    <View className="order-detail">
      <Header>
        <View className="header-content">
          <Text
            onClick={() => navigateBack(-1)}
            className="at-icon at-icon-chevron-left"
          ></Text>
          <Text>订单详情</Text>
          <Text></Text>
        </View>
      </Header>
      {orderDetail && <BasicInformation orderDetail={orderDetail} />}
    </View>
  );
};
export default OrderDetail;
