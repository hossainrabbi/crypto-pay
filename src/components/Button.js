import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { colors } from "../themes/colors";
import { spacing } from "../themes/spacing";
import Text from "./Text";

export default function Button({
  children,
  rounded = false,
  outline = false,
  pressStyle,
  style,
  onPress,
  ...rest
}) {
  return (
    <Pressable
      style={{
        ...styles.btnPress,
        borderRadius: rounded ? 30 : 10,
        backgroundColor: outline ? colors.white : colors.sky,
        borderColor: outline ? colors.sky : colors.white,
        ...pressStyle,
      }}
      onPress={onPress}
      {...rest}
    >
      <Text
        style={{
          ...styles.btn,
          color: outline ? colors.sky : colors.white,
          ...style,
        }}
      >
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btnPress: {
    borderWidth: 1,
  },
  btn: {
    textAlign: "center",
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
  },
});
