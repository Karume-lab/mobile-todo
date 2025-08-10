import { Stack } from "expo-router";
import React from "react";

const ProtectedLayout = () => {
  return (
    <Stack>
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
