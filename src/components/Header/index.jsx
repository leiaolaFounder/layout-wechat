import { getEnv, getMenuButtonBoundingClientRect } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { useAppDispatch, userActions } from "@hooks/store";

import "./index.scss";
const { top, height } = getMenuButtonBoundingClientRect();
const baseHeight = 8;

const SafeTopArea = (props) => {
  const dispatch = useAppDispatch();
  const PDH = top - baseHeight;
  const a = height + baseHeight * 2;
  dispatch(userActions.setPDH(PDH + a));
  return (
    <View
      style={`width: 100%;  padding-top:${top - baseHeight}px;height:${
        height + baseHeight * 2
      }px;`}
    >
      {props.children}
    </View>
  );
};

export default SafeTopArea;
