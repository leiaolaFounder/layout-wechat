export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/login/index",
    "pages/myPublisHorders/index",
    "pages/addOrder/index",
    "pages/myOrder/index",
    "pages/me/index",
    "pages/orderDetail/index",
  ],
  tabBar: {
    color: "#969799",
    selectedColor: "#1AB370",
    backgroundColor: "#fff",
    borderStyle: "white",
    list: [
      {
        pagePath: "pages/index/index",
        text: "跑腿",
      },
      {
        pagePath: "pages/login/index",
        text: "点餐",
      },
      {
        pagePath: "pages/me/index",
        text: "个人中心",
      },
    ],
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
});
