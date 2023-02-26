import React from "react";
import { StyleSheet, Text as RNText } from "react-native";
import { colors } from "../themes/colors";
import { typography } from "../themes/typography";

export default function Text({ children, style, preset = "default" }) {
  const textStyles = StyleSheet.compose(presets[preset], style);

  return <RNText style={textStyles}>{children}</RNText>;
}

const BASE = {
  color: colors.gray,
  fontSize: 15,
  fontFamily: typography.primary,
};

const BASE_Bold = {
  color: colors.black,
  fontSize: 15,
  fontFamily: typography.primaryBold,
};

const presets = {
  default: BASE,
  bold: BASE_Bold,
  h1: {
    ...BASE_Bold,
    fontSize: 30,
  },
  h2: {
    ...BASE_Bold,
    fontSize: 24,
  },
  small: {
    ...BASE,
    fontSize: 14,
  },
};
