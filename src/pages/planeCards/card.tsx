import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import colors from "../../constants/colors";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Dimensions } from "react-native";

const { height: ht, width } = Dimensions.get("window");

const Wrap = styled.Pressable<{ bgColor?: string }>`
  height: 100%;
  width: 100%;
  background-color: ${({ bgColor }) => bgColor || colors.light_grey};
  border-radius: 12px;
`;

const Card = ({ height, color }) => {
  const wrapHeight = useSharedValue(`${height}%`);
  const [fullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    if (fullScreen) {
      wrapHeight.value = withTiming(`${ht}px`, { duration: 1000 });
    } else {
      wrapHeight.value = withTiming(`${height}%`, { duration: 500 });
    }
  }, [fullScreen]);

  const style = useAnimatedStyle(() => {
    return {
      height: wrapHeight.value,
    };
  });
  return (
    <Animated.View style={style}>
      <Wrap onPress={() => setFullScreen(!fullScreen)} bgColor={color} />
    </Animated.View>
  );
};

export default Card;
