import { BottomSheet, useBottomSheet } from "@/src/components/ui/bottom-sheet";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { View } from "@/src/components/ui/view";
import { Mail } from "lucide-react-native";
import React from "react";

const ForgotPasswordBottomSheet = () => {
  const { isVisible, open, close } = useBottomSheet();

  return (
    <View>
      <Button variant="ghost" onPress={open} style={{ marginLeft: "auto" }}>
        Forgot password?
      </Button>

      <BottomSheet
        isVisible={isVisible}
        onClose={close}
        title="Forgot password"
        snapPoints={[0.9, 0.5]}
        enableBackdropDismiss={false}
      >
        <Input
          label="Email"
          icon={Mail}
          placeholder="Enter the email for your account"
          containerStyle={{
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 40,
            marginVertical: 20,
          }}
        />

        <Button onPress={close}>Send code</Button>
      </BottomSheet>
    </View>
  );
};

export default ForgotPasswordBottomSheet;
