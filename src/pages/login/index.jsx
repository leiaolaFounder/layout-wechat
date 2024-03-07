import { View, Text, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";
import { reLaunch, setStorageSync } from "@tarojs/taro";
import loginImg from "./image/login_img.png";
import { useFeatch } from "@hooks/fetch";
import { useAppDispatch, userActions } from "@hooks/store";
import "./index.scss";

const Login = () => {
  const fetch = useFeatch();
  const dispatch = useAppDispatch();
  const userLogin = async () => {
    const { data } = await fetch("get", "/users/login", {
      userName: "leiao",
      passWord: "123456",
    });
    dispatch(userActions.setUserInfo(data.userInfo));
    const url = "/pages/index/index";
    reLaunch({
      url,
    });
  };
  return (
    <View className="login-content">
      <Image style={{ marginTop: 250 + "rpx" }} src={loginImg}></Image>
      <View className="title">欢迎来到layout</View>
      <View className="title-detail">让我们来解决你的问题</View>
      <AtButton type="primary" onClick={userLogin}>
        一键登录
      </AtButton>
    </View>
  );
};
export default Login;
