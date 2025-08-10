import { Button } from "@/src/components/ui/button";
import { Checkbox } from "@/src/components/ui/checkbox";
import { Image } from "@/src/components/ui/image";
import { Input } from "@/src/components/ui/input";
import { Link } from "@/src/components/ui/link";
import { Text } from "@/src/components/ui/text";
import { View } from "@/src/components/ui/view";
import { Lock, Mail } from "lucide-react-native";
import React from "react";

const SignInScreen = () => {
  return (
    <View
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
          source={require("@/assets/core/taska-logo.png")}
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
          Taska
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
        <Link href={"/(tabs)/home"} asChild>
          <Button>Sign up</Button>
        </Link>
      </View>

      <Link href="/sign-in" asChild style={{ marginTop: "auto" }}>
        <Text style={{ textDecorationLine: "none" }}>
          Already have an account?{" "}
          <Text style={{ fontWeight: "bold" }}>Sign in</Text>
        </Text>
      </Link>
    </View>
  );
};

export default SignInScreen;
