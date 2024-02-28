import { View, Text, Image } from "@tarojs/components";
import { AtForm, AtInput, AtImagePicker, AtTextarea, AtButton } from "taro-ui";

import "./index.scss";

const addOrder = () => {
  return (
    <View className="add-order">
      <AtForm>
        <AtInput
          name="value"
          title="订单标题"
          type="text"
          placeholder="请输入"
        />
        <AtInput
          name="value"
          title="订单描述"
          type="text"
          placeholder="请输入"
        />
        <AtInput
          name="value"
          title="订单价格"
          type="number"
          placeholder="请输入"
        />
        <View className="notes">
          <Text>订单备注</Text>
          <AtTextarea maxLength={200} placeholder="请输入" />
        </View>

        <View className="upload-img">
          <View className="img-title">照片</View>
          <AtImagePicker />
        </View>
        <View className="add-sub">
          <AtButton type="primary" circle={true}>
            提交
          </AtButton>
        </View>
      </AtForm>
    </View>
  );
};
export default addOrder;
