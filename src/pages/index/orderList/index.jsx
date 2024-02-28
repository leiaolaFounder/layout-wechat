import { View, Text, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";
import { navigateTo } from "@tarojs/taro";
import dayjs from "dayjs";
import "./index.scss";

const OrderList = ({ orderList }) => {
  const jumpOrderDetail = (id) => {
    const url = `/pages/orderDetail/index?orderId=${id}`;
    navigateTo({
      url,
    });
  };
  return (
    <View className="order-list">
      {orderList
        ? orderList.map((item) => (
            <View
              className="order-list-item"
              onClick={() => jumpOrderDetail(item.id)}
            >
              <View className="order-top">
                <View className="order-list-left">
                  <View className="order-title">{item?.title}</View>
                  <View className="order-notes">{item?.describe}</View>
                </View>
                <View className="order-list-right">
                  <AtButton type="secondary" circle={true}>
                    抢单
                  </AtButton>
                </View>
              </View>
              <View className="order-bottom">
                <View className="order-time">
                  发单时间：{dayjs(item.createdAt).format("YYYY-MM-DD HH:mm")}
                </View>
                <View className="order-price">${item.order_price}</View>
              </View>
            </View>
          ))
        : null}
    </View>
  );
};
export default OrderList;
