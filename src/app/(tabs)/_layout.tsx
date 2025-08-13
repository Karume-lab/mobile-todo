import AddTaskBottomSheet from "@/src/components/core/AddTaskBottomSheet";
import { Avatar } from "@/src/components/ui/avatar";
import { Icon } from "@/src/components/ui/icon";
import { Image } from "@/src/components/ui/image";
import { Link } from "@/src/components/ui/link";
import { ModeToggle } from "@/src/components/ui/mode-toggle";
import { useThemeColor } from "@/src/hooks/useThemeColor";
import { PlatformPressable } from "@react-navigation/elements";
import { BlurView } from "expo-blur";
import * as Haptics from "expo-haptics";
import { Tabs } from "expo-router";
import { Calendar, Home, ListTodo, Settings } from "lucide-react-native";
import React from "react";
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";

const TabsLayout = () => {
  const primary = useThemeColor({}, "primary");

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: primary,
          tabBarShowLabel: false,
          header: () => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 4,
              }}
            >
              <ModeToggle />
              <Link href={"/(protected)/profile"} asChild>
                <TouchableOpacity>
                  <Avatar
                    style={{
                      marginLeft: "auto",
                    }}
                  >
                    <Image source={require("@/assets/core/pfp.png")} />
                  </Avatar>
                </TouchableOpacity>
              </Link>
            </View>
          ),
          tabBarButton: (props) => (
            <PlatformPressable
              {...props}
              onPressIn={(ev) => {
                if (process.env.EXPO_OS === "ios") {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                }
                props.onPressIn?.(ev);
              }}
            />
          ),
          tabBarBackground: () => {
            if (Platform.OS === "ios") {
              return (
                <BlurView
                  tint="systemChromeMaterial"
                  intensity={100}
                  style={StyleSheet.absoluteFill}
                />
              );
            }
            return null;
          },
          tabBarStyle: Platform.select({
            ios: { position: "absolute" },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name={Home} size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="tasks"
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name={ListTodo} size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="calendar"
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name={Calendar} size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name={Settings} size={24} color={color} />
            ),
          }}
        />
      </Tabs>

      <AddTaskBottomSheet />
    </View>
  );
};

export default TabsLayout;
