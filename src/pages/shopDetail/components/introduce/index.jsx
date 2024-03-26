import { View, Image, Button } from "@tarojs/components";
import { AtButton, AtList, AtListItem, AtToast } from "taro-ui";
import { navigateBack } from "@tarojs/taro";
import { useFeatch } from "@hooks/fetch";
import { useState } from "react";
import dayjs from "dayjs";
import "./index.scss";
const Introduce = ({ orderDetail }) => {
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
    <View>
      <Image
        style={{ width: "100%", height: "212px" }}
        src="https://p.qqan.com/up/2024-3/17110862851308133.jpg"
      />
      <View className="introduce">
        <View className="introduce-title">
          When the Riddler, a sadistic serial killer, begins murdering key
          political figures in Gotham, Batman is forced to investigate the
          city's hidden corruption and question his family's involvement.
        </View>
        <View className="introduce-cell">
          <View>店铺姓名：</View>
          <View>宽窄巷子</View>
        </View>
        <View className="introduce-cell">
          <View>店铺描述：</View>
          <View>
            Robert Pattinson, Zoë Kravitz, Jeffrey Wright, Colin Farrell, Paul
            Dano, John Turturro, Andy Serkis, Peter Sarsgaard
          </View>
        </View>
        <View className="introduce-cell">
          <View>店铺地址：</View>
          <View>顺义马坡衙门村</View>
        </View>
        <View className="introduce-cell">
          <View>联系电话：</View>
          <View>17610683515</View>
        </View>
      </View>
    </View>
  );
};
export default Introduce;
