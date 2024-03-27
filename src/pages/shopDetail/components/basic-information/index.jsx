import { View, Image, Button } from "@tarojs/components";
import { AtButton, AtList, AtListItem, AtToast } from "taro-ui";

import { navigateBack } from "@tarojs/taro";
import { useFeatch } from "@hooks/fetch";
import { useState } from "react";
import dayjs from "dayjs";
import "./index.scss";
const BasicInformation = ({ orderDetail }) => {
  const featch = useFeatch();
  const [toast, setToast] = useState(false);
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
    <View className="basic-information">
      <AtToast isOpened={toast} text="抢单成功" icon="check"></AtToast>

      <View className="basic-information-top">
        <View className="basic-information-title">基本信息</View>
        <AtList hasBorder={false}>
          <AtListItem title="标题" extraText={orderDetail.title} />
          <AtListItem title="规格" extraText={orderDetail.describe} />
          <AtListItem title="标题文字" note={orderDetail.notes} />
        </AtList>
      </View>
      <View className="basic-information-content">
        <View className="basic-content-title">照片</View>
        <Image src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
      </View>
      <View className="basic-information-bottom">
        <AtList hasBorder={false}>
          <AtListItem
            title="发布者"
            extraText={orderDetail.order_assignee_id}
          />
          <AtListItem
            title="发布时间"
            extraText={dayjs(orderDetail.createdAt).format("YYYY-MM-DD HH:mm")}
          />
        </AtList>
      </View>
      <AtButton type="primary" onClick={grabOrder} circle={true}>
        接单
      </AtButton>
    </View>
  );
};
export default BasicInformation;
