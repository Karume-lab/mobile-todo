import { ThemeProvider } from "@/theme/theme-provider";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const RootLayout = () => {
  const { top: topInsets } = useSafeAreaInsets();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        {/* 
        done to ensure all content is safely rendered and no header
        override in the children if need be
        */}
        <Stack
          screenOptions={{
            contentStyle: { paddingTop: topInsets },
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="index"
            // does not need the safe padding hence set to 0
            options={{ contentStyle: { paddingTop: 0 } }}
          />
          <Stack.Screen name="sign-in" />
          <Stack.Screen name="sign-up" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
