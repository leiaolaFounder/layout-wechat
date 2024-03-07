import { View, Text, Image } from "@tarojs/components";
import { AtForm, AtInput, AtImagePicker, AtTextarea, AtButton } from "taro-ui";
import { useFeatch } from "@hooks/fetch";
import { useState } from "react";
import "./index.scss";

const addOrder = () => {
  const featch = useFeatch();
  const [orderFrom, setOrderFrom] = useState({
    title: "",
    notes: "",
    orderPrice: 0,
    describe: "",
    orderImgUrl: "",
    orderVerification: "1234",
  });
  const changeOrderData = (value, event) => {
    console.log(event);
    const name = event.target ? event.target.id : event;
    setOrderFrom((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const subOrderData = async () => {
    await featch("post", "/orders/addOrder", orderFrom);
  };
  return (
    <View className="add-order">
      <AtForm onSubmit={subOrderData}>
        <AtInput
          name="title"
          title="订单标题"
          type="text"
          placeholder="请输入"
          value={orderFrom.title}
          onChange={changeOrderData}
        />
        <AtInput
          name="describe"
          title="订单描述"
          type="text"
          placeholder="请输入"
          value={orderFrom.describe}
          onChange={changeOrderData}
        />
        <AtInput
          name="orderPrice"
          title="订单价格"
          type="number"
          placeholder="请输入"
          value={orderFrom.orderPrice}
          onChange={changeOrderData}
        />
        <View className="notes">
          <Text>订单备注</Text>
          <AtTextarea
            name="notes"
            maxLength={200}
            placeholder="请输入"
            value={orderFrom.notes}
            onChange={(val) => changeOrderData(val, "notes")}
          />
        </View>

        <View className="upload-img">
          <View className="img-title">照片</View>
          <AtImagePicker />
        </View>
        <View className="add-sub">
          <AtButton type="primary" formType="submit" circle={true}>
            提交
          </AtButton>
        </View>
      </AtForm>
    </View>
  );
};
export default addOrder;
