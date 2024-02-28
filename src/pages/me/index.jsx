import { View, Text, Image } from "@tarojs/components";
import Header from "../../components/Header/index";
import { useLoad, navigateTo } from "@tarojs/taro";
import { AtList, AtListItem } from "taro-ui";
import "./index.scss";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });
  const jumpPage = (url) => {
    console.log(1231231);
    navigateTo({
      url,
    });
  };
  return (
    <View className="me">
      <Header>
        <View className="header-content">
          <Text></Text>
          <Text>我的</Text>
          <Text></Text>
        </View>
      </Header>
      <View className="user-detail">
        <Image
          className="head-portrait"
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <Text className="user-name">摇摇不喝拿铁</Text>
        <Text className="at-icon at-icon-chevron-right" />
      </View>
      <View className="user-content">
        <AtList>
          <AtListItem
            title="我的订单"
            arrow="right"
            iconInfo={{
              size: 25,
              value: "icon iconfont icon-dingdan",
            }}
            onClick={() => jumpPage("/pages/myOrder/index")}
          />
          <AtListItem
            title="发布订单"
            arrow="right"
            iconInfo={{
              size: 25,
              value: "icon iconfont icon-sousuoxiawu-",
            }}
            onClick={() => jumpPage("/pages/myPublisHorders/index")}
          />
          <AtListItem
            title="退出登陆"
            arrow="right"
            iconInfo={{
              size: 25,
              value: "icon iconfont icon-tuichudenglu",
            }}
          />
        </AtList>
      </View>
    </View>
  );
}
