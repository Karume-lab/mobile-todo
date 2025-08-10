import AddTaskBottomSheet from "@/components/core/AddTaskBottomSheet";
import { Avatar } from "@/components/ui/avatar";
import { Icon } from "@/components/ui/icon";
import { Link } from "@/components/ui/link";
import { useThemeColor } from "@/hooks/useThemeColor";
import { PlatformPressable } from "@react-navigation/elements";
import { BlurView } from "expo-blur";
import * as Haptics from "expo-haptics";
import { Tabs } from "expo-router";
import { Calendar, Home, Stars } from "lucide-react-native";
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
            <Link href={"/(protected)/(profile)"} asChild>
              <TouchableOpacity>
                <Avatar
                  style={{
                    marginLeft: "auto",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "purple",
                      padding: 20,
                    }}
                  />
                </Avatar>
              </TouchableOpacity>
            </Link>
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
              <Icon name={Stars} size={24} color={color} />
            ),
          }}
        />
      </Tabs>

      <AddTaskBottomSheet />
    </View>
  );
};

export default TabsLayout;
