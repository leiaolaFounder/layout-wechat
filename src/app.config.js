export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/login/index",
    "pages/myPublisHorders/index",
    "pages/addOrder/index",
    "pages/myOrder/index",
    "pages/me/index",
    "pages/orderDetail/index",
    "pages/selectShop/index",
    "pages/shopDetail/index",
  ],
  tabBar: {
    color: "#8a8a8a",
    selectedColor: "#7f6ecb",
    backgroundColor: "#fff",
    borderStyle: "white",
    list: [
      {
        iconPath: "./static/image/nohome.png",
        selectedIconPath: "./static/image/home.png",
        pagePath: "pages/index/index",
        text: "home",
      },
      {
        iconPath: "./static/image/nodiancan.png",
        selectedIconPath: "./static/image/diancan.png",
        pagePath: "pages/selectShop/index",
        text: "shop",
      },
      {
        iconPath: "./static/image/nomy.png",
        selectedIconPath: "./static/image/my.png",
        pagePath: "pages/me/index",
        text: "me",
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
