import { getEnv, getMenuButtonBoundingClientRect } from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./index.scss";

const system = getEnv();
const { top, height } =
  system === "WEB" ? { top: 0, height: 0 } : getMenuButtonBoundingClientRect();
const baseHeight = 8;
const defaultProps = {
  scrollTop: 0,
  gradual: false,
  bgColor: "#FFFFFF",
  fixed: false,
};

const SafeTopArea = (props) => {
  props = { ...defaultProps, ...props };

  const { children, fixed } = props;

  return (
    <View
      className={`fixed-top ${fixed ? "sk" : ""}`}
      style={`width: 100%;  padding-top:${top - baseHeight}px;height:${
        height + baseHeight * 2
      }px;`}
    >
      {children}
    </View>
  );
};

export default SafeTopArea;
