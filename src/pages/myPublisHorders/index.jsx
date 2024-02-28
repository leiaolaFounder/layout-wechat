import { View, Text, Image } from "@tarojs/components";
import MyPublisHorders from "./orderList/index";
import { navigateTo, useLoad, navigateBack } from "@tarojs/taro";
import { AtButton } from "taro-ui";
import { useState } from "react";
import { useFetch } from "@hooks/fetch";
import "./index.scss";

const myPublisHorders = () => {
  return (
    <View className="my-publis-horders">
      <MyPublisHorders />
      <View className="add-order">
        <AtButton
          onClick={() =>
            navigateTo({
              url: "/pages/addOrder/index",
            })
          }
          type="primary"
          circle={true}
        >
          发布新订单
        </AtButton>
      </View>
    </View>
  );
};
export default myPublisHorders;
