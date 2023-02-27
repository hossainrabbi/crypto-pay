import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { colors } from "../themes/colors";
import { spacing } from "../themes/spacing";

export default function BackBtn({ children, ...rest }) {
  const { goBack } = useNavigation();
  return (
    <Pressable style={styles.container} onPress={() => goBack()} {...rest}>
      {children ? (
        { children }
      ) : (
        <AntDesign name="arrowleft" size={20} color="black" />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: 40,
    height: 40,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.black,
    shadowRadius: 1.41,
    shadowOpacity: 0.2,
    elevation: 3,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    marginVertical: spacing[2],
  },
});
