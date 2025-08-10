import { ThemeProvider } from "@/src/theme/theme-provider";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const RootLayout = () => {
  const { top } = useSafeAreaInsets();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen
            name="sign-in"
            options={{ contentStyle: { paddingTop: top } }}
          />
          <Stack.Screen
            name="sign-up"
            options={{ contentStyle: { paddingTop: top } }}
          />
          <Stack.Screen
            name="(tabs)"
            options={{ contentStyle: { paddingTop: top } }}
          />
          <Stack.Screen
            name="+not-found"
            options={{ contentStyle: { paddingTop: top } }}
          />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
