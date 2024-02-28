import { View, Text, Image } from "@tarojs/components";
import { AtButton, AtList, AtListItem } from "taro-ui";
import dayjs from "dayjs";
import "./index.scss";
const BasicInformation = ({ orderDetail }) => {
  return (
    <View className="basic-information">
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
      <AtButton type="primary" circle={true}>
        接单
      </AtButton>
    </View>
  );
};
export default BasicInformation;
