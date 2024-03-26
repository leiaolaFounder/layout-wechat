import { View, Text, Button } from "@tarojs/components";
import { navigateBack } from "@tarojs/taro";
import {
  AtForm,
  AtInput,
  AtImagePicker,
  AtTextarea,
  AtButton,
  AtModal,
  AtModalHeader,
  AtModalContent,
  AtModalAction,
  AtToast,
} from "taro-ui";

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
    orderVerification: "",
  });

  const [orderDialogFlag, setOrderDialogFlag] = useState(false);
  const [toast, setToast] = useState(false);
  const changeOrderData = (value, event) => {
    const name = event.target ? event.target.id : event;
    setOrderFrom((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const subOrderData = async () => {
    setOrderDialogFlag(true);
  };
  const cancelSubOrder = () => {
    setOrderDialogFlag(false);
  };
  const subOrder = async () => {
    await featch("post", "/orders/addOrder", orderFrom);
    setOrderDialogFlag(false);
    setToast(true);
    setTimeout(() => {
      setToast(false);
      navigateBack(-1);
    }, 1000);
  };
  return (
    <View className="add-order">
      <AtToast isOpened={toast} text="发布成功" icon="check"></AtToast>
      <View className="modal">
        <AtModal isOpened={orderDialogFlag}>
          <AtModalHeader>订单码</AtModalHeader>
          <AtModalContent>
            <View style={{ fontSize: "24rpx" }}>
              请一定保密您输入的订单码，订单完成后跟接单人核对
            </View>
            <AtInput
              border={false}
              name="value2"
              title="订单码："
              type="number"
              placeholder="请输入您的订单密码"
              value={orderFrom?.orderVerification}
              onChange={(val) => changeOrderData(val, "orderVerification")}
            />
          </AtModalContent>
          <AtModalAction>
            <Button onClick={cancelSubOrder}>取消</Button>
            <Button onClick={subOrder}>确定</Button>
          </AtModalAction>
        </AtModal>
      </View>

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
