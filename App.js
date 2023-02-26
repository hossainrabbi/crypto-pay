import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Home from "./src/screens/Home";
import SignIn from "./src/screens/SignIn";
import Signup from "./src/screens/Signup";
import TodoList from "./src/screens/TodoList";
import { colors } from "./src/themes/colors";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  });

  const auth = false;

  if (!fontsLoaded) {
    return null;
  }

  const customTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.lightWhite,
    },
  };

  return (
    <NavigationContainer theme={customTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        {auth ? (
          <Stack.Screen name="TodoList" component={TodoList} />
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
