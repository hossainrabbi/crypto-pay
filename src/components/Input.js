import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { colors } from "../themes/colors";
import { spacing } from "../themes/spacing";

export default function Input({ secureTextEntry, style, ...rest }) {
  return (
    <TextInput
      autoCapitalize="none"
      placeholder="Type username or email"
      selectionColor={colors.gray}
      style={[styles.container, style]}
      secureTextEntry={secureTextEntry}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.4,
    borderColor: colors.sky,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[3],
    borderRadius: spacing[2],
    borderTopWidth: 1.5,
    color: colors.black,
  },
});
