import { Button } from "@/components/ui/button";
import { useRouter } from "expo-router";
import {
  Bell,
  Calendar,
  CheckSquare,
  ListTodo,
  Smile,
  Star,
} from "lucide-react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = () => {
  const router = useRouter();

  return (
    <Onboarding
      pages={[
        {
          backgroundColor: "#FFF9C4",
          image: <ListTodo size={80} color="#FBC02D" />,
          title: "Welcome to TaskBuddy",
          subtitle:
            "Organize your day and stay on top of your tasks effortlessly.",
        },
        {
          backgroundColor: "#fce4ec",
          image: <CheckSquare size={80} color="#e91e63" />,
          title: "Create & Complete",
          subtitle: "Add new to-dos in seconds and check them off when done.",
        },
        {
          backgroundColor: "#e3f2fd",
          image: <Bell size={80} color="#2196f3" />,
          title: "Get Reminders",
          subtitle: "Never miss a deadline with smart notifications.",
        },
        {
          backgroundColor: "#f3e5f5",
          image: <Calendar size={80} color="#9c27b0" />,
          title: "Plan Ahead",
          subtitle: "Schedule tasks for the days that matter most.",
        },
        {
          backgroundColor: "#fff3e0",
          image: <Star size={80} color="#ff9800" />,
          title: "Prioritize What Matters",
          subtitle: "Mark important tasks so you focus on what's key.",
        },
        {
          backgroundColor: "#e8f5e9",
          image: <Smile size={80} color="#4caf50" />,
          title: "Stay Motivated",
          subtitle: "Enjoy small wins every day as you tick off your list.",
        },
      ]}
      showSkip={false}
      NextButtonComponent={({ nextLabel, onPress }) => (
        <Button variant="secondary" onPress={onPress}>
          {nextLabel}
        </Button>
      )}
      DoneButtonComponent={({ onPress }) => (
        <Button
          style={{ backgroundColor: "#e8f5e9" }}
          textStyle={{ color: "#4caf50" }}
          onPress={onPress}
        >
          Get started
        </Button>
      )}
      onDone={() => router.replace("/sign-in")}
    />
  );
};

export default OnboardingScreen;
