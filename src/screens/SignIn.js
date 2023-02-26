import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import Text from "../components/Text";
import { colors } from "../themes/colors";
import { spacing } from "../themes/spacing";

export default function SignIn() {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.contentContainer}>
        <Button rounded>Log in</Button>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: spacing[2],
          }}
        >
          <Text>Don't have an account?</Text>
          <Pressable
            style={{ marginLeft: spacing[1] }}
            onPress={() => navigate("Signup")}
          >
            <Text style={{ color: colors.sky }}>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: spacing[4],
    marginVertical: spacing[4],
    flex: 1,
    justifyContent: "flex-end",
  },
});
