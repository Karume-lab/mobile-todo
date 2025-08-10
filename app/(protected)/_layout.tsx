import { Stack } from "expo-router";
import React from "react";

const ProtectedLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerBackground: () => <></>,
      }}
    >
      <Stack.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
        }}
      />
    </Stack>
  );
};

export default ProtectedLayout;
