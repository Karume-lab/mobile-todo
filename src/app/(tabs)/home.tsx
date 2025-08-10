import { Button } from "@/src/components/ui/button";
import { Icon } from "@/src/components/ui/icon";
import { ScrollView } from "@/src/components/ui/scroll-view";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { Text } from "@/src/components/ui/text";
import { View } from "@/src/components/ui/view";
import { useThemeColor } from "@/src/hooks/useThemeColor";
import {
  BriefcaseBusiness,
  GraduationCap,
  Heart,
  LucideProps,
  MoreHorizontal,
} from "lucide-react-native";
import React from "react";

const categories: {
  id: string;
  icon: {
    name: React.ComponentType<LucideProps>;
    color: string;
  };
  label: string;
  value: string;
}[] = [
  {
    id: "1",
    icon: {
      name: BriefcaseBusiness,
      color: "#1976D2",
    },
    label: "Work",
    value: "work",
  },
  {
    id: "2",
    icon: {
      name: Heart,
      color: "#E91E63",
    },
    label: "Life",
    value: "life",
  },

  {
    id: "3",
    icon: {
      name: GraduationCap,
      color: "#FBC02D",
    },
    label: "School",
    value: "school",
  },
  {
    id: "4",
    icon: {
      name: MoreHorizontal,
      color: "#9E9E9E",
    },
    label: "Other",
    value: "other",
  },
];

const HomeScreen = () => {
  const backgroundColor = useThemeColor({}, "accent");

  return (
    // TODO: find a better way to avoid this being hidden by the search bar
    <View style={{ marginTop: 20 }}>
      <Text>Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ padding: 8 }}
      >
        {categories.map(({ icon, id, label, value }) => (
          <Button
            key={id}
            style={{
              marginHorizontal: 8,
              width: 150,
              height: 150,
              borderRadius: 12,
              backgroundColor,
            }}
          >
            <View>
              <Icon {...icon} size={64} />
              <Text style={{ textAlign: "center" }}>{label}</Text>
            </View>
          </Button>
        ))}
      </ScrollView>

      <Tabs defaultValue="due">
        <TabsList style={{ display: "flex" }}>
          <TabsTrigger
            style={{
              width: 240,
            }}
            value="due"
          >
            Tab 1
          </TabsTrigger>
          <TabsTrigger
            style={{
              width: 240,
            }}
            value="overdue"
          >
            Tab 2
          </TabsTrigger>
        </TabsList>
        <TabsContent value="due">
          <Text>Tasks Due Today</Text>
        </TabsContent>
        <TabsContent value="overdue">
          <Text>Overdue Tasks</Text>
        </TabsContent>
      </Tabs>
    </View>
  );
};

export default HomeScreen;
