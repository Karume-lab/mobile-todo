import { Button } from "@/src/components/ui/button";
import { Icon } from "@/src/components/ui/icon";
import { Link } from "@/src/components/ui/link";
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
}[] = [
  {
    id: "1",
    icon: {
      name: BriefcaseBusiness,
      color: "#1976D2",
    },
    label: "Work",
  },
  {
    id: "2",
    icon: {
      name: Heart,
      color: "#E91E63",
    },
    label: "Life",
  },

  {
    id: "3",
    icon: {
      name: GraduationCap,
      color: "#FBC02D",
    },
    label: "School",
  },
  {
    id: "4",
    icon: {
      name: MoreHorizontal,
      color: "#9E9E9E",
    },
    label: "Other",
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
        {categories.map(({ icon, id, label }) => (
          <Link
            key={id}
            href={{
              pathname: "/tasks",
              params: { categoryId: id },
            }}
            
          >
            <Button
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
          </Link>
        ))}
      </ScrollView>

      <Tabs defaultValue="due-today" enableSwipe={false}>
        <TabsList style={{ display: "flex" }}>
          <TabsTrigger
            style={{
              width: 240,
            }}
            value="due-today"
          >
            Due Today
          </TabsTrigger>
          <TabsTrigger
            style={{
              width: 240,
            }}
            value="overdue"
          >
            Overdue
          </TabsTrigger>
        </TabsList>
        <TabsContent value="due-today">
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
