import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackBtn from "../components/BackBtn";
import Button from "../components/Button";
import Input from "../components/Input";
import Text from "../components/Text";
import { colors } from "../themes/colors";
import { spacing } from "../themes/spacing";

export default function SignIn() {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: spacing[4] }}>
      <BackBtn />

      <View style={{ marginVertical: spacing[4], marginBottom: spacing[8] }}>
        <Text preset="h1">Let's Sign In</Text>
        <Text>Welcome back, you have been missed!</Text>
      </View>

      <View>
        <Input
          placeholder="Username or email"
          style={{ marginBottom: spacing[3] }}
        />
        <Input secureTextEntry placeholder="Password" />
      </View>

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
    marginVertical: spacing[4],
    flex: 1,
    justifyContent: "flex-end",
  },
});
