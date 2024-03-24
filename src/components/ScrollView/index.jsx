import React, { useState, useRef } from "react";
import { View, ScrollView } from "@tarojs/components";
import { useAppSelector } from "@hooks/store";
import { useDidShow } from "@tarojs/taro";
const LaScrollView = (props) => {
  const defaultProps = {
    refresherEnabled: true,
  };
  const PDH = useAppSelector((state) => state.user.PDH) || 0;
  props = { ...defaultProps, ...props };
  const {
    children,
    loadMore,
    refresh,
    isRefreshing,
    PAGEPDH,
    refresherEnabled,
  } = props;

  const [newPDH, setNewPDH] = useState(0);
  const scrollRef = useRef(null);
  useDidShow(() => {
    setNewPDH(PDH);
  });
  //   下拉刷新
  const handleRefresh = async () => {
    await refresh();
  };
  //  上拉加载
  const handleLoadMore = async () => {
    await loadMore();
  };
  return (
    <View
      style={{
        height: `calc(100vh - ${newPDH}px - ${PAGEPDH || 0}rpx)`,
        overflow: "scroll",
      }}
    >
      <ScrollView
        ref={scrollRef}
        scrollY
        refresherEnabled={refresherEnabled}
        refresherTriggered={isRefreshing}
        onRefresherRefresh={handleRefresh}
        onScrollToLower={handleLoadMore}
        style={{ height: "100%" }}
        lowerThreshold={200}
      >
        {children ? (
          <View style={{ padding: "20rpx" }}>{children}</View>
        ) : (
          "暂无数据"
        )}
      </ScrollView>
    </View>
  );
};

export default LaScrollView;
