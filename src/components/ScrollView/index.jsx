import React, { useState, useRef } from "react";
import { View, ScrollView } from "@tarojs/components";
import { useAppSelector } from "@hooks/store";
import { useDidShow } from "@tarojs/taro";
const LaScrollView = (props) => {
  const PDH = useAppSelector((state) => state.user.PDH) || 0;
  props = { ...props };
  console.log(PDH, "PDH");
  const { children, initData, PadTop = 0 } = props;

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [newPDH, setNewPDH] = useState(0);

  let pageSize = 10;
  let pageNo = props.pageNo || 1;
  const scrollRef = useRef(null);
  useDidShow(() => {
    setNewPDH(PDH);
    initData(pageNo, pageSize);
  });
  //   下拉刷新
  const handleRefresh = async () => {
    if (isRefreshing) return;
    setIsRefreshing(true);
    pageNo = 1;
    await initData(pageNo, pageSize);
    setIsRefreshing(false);
  };
  //  上拉加载
  const handleLoadMore = async () => {
    pageNo++;
    await initData(pageNo, pageSize);
  };

  return (
    <View
      style={{
        height: `calc(100vh - ${newPDH}px - ${props.PAGEPDH || 0}rpx)`,
        overflow: "scroll",
      }}
    >
      <ScrollView
        ref={scrollRef}
        scrollY
        refresherEnabled
        refresherTriggered={isRefreshing}
        onRefresherRefresh={handleRefresh}
        onScrollToLower={handleLoadMore}
        style={{ height: "100%" }}
      >
        <View style={{ padding: "20rpx" }}>{children}</View>
      </ScrollView>
    </View>
  );
};

export default LaScrollView;
