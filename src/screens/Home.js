import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import Text from "../components/Text";
import Banner from "../svg/Banner";
import { colors } from "../themes/colors";
import { spacing } from "../themes/spacing";

export default function Home({ navigation }) {
  const auth = false;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.imageContainer}>
        <Banner
          color={colors.sky}
          bitcoinColor={colors.golden}
          bitcoinBorder={colors.orange}
          style={styles.bannerImage}
        />
      </View>

      <View style={styles.contentContainer}>
        <Text preset="h1" style={{ textAlign: "center" }}>
          Easy and Secure
        </Text>
        <Text style={styles.subtitle}>
          Cryptocurrencies impede the traceability of transacting making them a
          favorite
        </Text>
        <Button
          rounded
          onPress={() => navigation.navigate(auth ? "TodoList" : "SignIn")}
        >
          Get Started
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    paddingTop: spacing[8],
    marginTop: spacing[8],
  },
  bannerImage: {
    width: "100%",
    height: 350,
    resizeMode: "cover",
  },
  contentContainer: {
    paddingHorizontal: spacing[4],
    flex: 1,
    justifyContent: "flex-end",
    marginVertical: spacing[8],
  },
  subtitle: {
    textAlign: "center",
    marginTop: spacing[2],
    marginBottom: spacing[8],
    paddingBottom: spacing[8],
  },
});
