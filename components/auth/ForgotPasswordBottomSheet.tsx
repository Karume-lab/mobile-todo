import { BottomSheet, useBottomSheet } from "@/components/ui/bottom-sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { View } from "@/components/ui/view";
import { Mail } from "lucide-react-native";
import React from "react";

const ForgotPasswordBottomSheet = () => {
  const {
    isVisible: isVisibleForgotPasswordBottomSheet,
    open: openForgotPasswordBottomSheet,
    close: closeForgotPasswordBottomSheet,
  } = useBottomSheet();

  return (
    <View>
      <Button
        variant="ghost"
        onPress={openForgotPasswordBottomSheet}
        style={{ marginLeft: "auto" }}
      >
        Forgot password?
      </Button>

      <BottomSheet
        isVisible={isVisibleForgotPasswordBottomSheet}
        onClose={closeForgotPasswordBottomSheet}
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

        <Button>Send code</Button>
      </BottomSheet>
    </View>
  );
};

export default ForgotPasswordBottomSheet;
