import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Image } from "@/components/ui/image";
import { Input } from "@/components/ui/input";
import { Link } from "@/components/ui/link";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";
import { Lock, Mail } from "lucide-react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SignInScreen = () => {
  return (
    <SafeAreaView
      style={{
        display: "flex",
        gap: 200,
        paddingHorizontal: 8,
        paddingVertical: 64,
        alignItems: "center",
        height: "100%",
      }}
    >
      <View style={{ width: 200, height: 200 }}>
        <Image
          source={require("@/assets/core/study-buddy-logo.png")}
          width={200}
          containerStyle={{
            padding: 20,
          }}
        />
        <Text
          style={{
            textAlign: "center",
            fontSize: 36,
            width: "100%",
            marginVertical: 12,
          }}
        >
          Study Buddy
        </Text>
      </View>

      <View style={{ display: "flex", gap: 12 }}>
        <Input label="Email" placeholder="Enter your email" icon={Mail} />
        <Input label="Password" placeholder="Enter your password" icon={Lock} />
        <Checkbox
          checked
          onCheckedChange={() => {}}
          label="I have read and I accept the terms and conditions"
        />
        <Button>Sign up</Button>
      </View>

      <Link href="/sign-in" asChild style={{ marginTop: "auto" }}>
        <Text style={{ textDecorationLine: "none" }}>
          Already have an account?{" "}
          <Text style={{ fontWeight: "bold" }}>Sign in</Text>
        </Text>
      </Link>
    </SafeAreaView>
  );
};

export default SignInScreen;
