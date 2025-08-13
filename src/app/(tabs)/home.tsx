import TaskCard from "@/src/components/core/TaskCard";
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
import { categories } from "@/src/lib/data/categories";
import { useTasksStore } from "@/src/store/tasks";
import React from "react";

const HomeScreen = () => {
  const backgroundColor = useThemeColor({}, "accent");

  const { tasks, setCategoryIdFilter } = useTasksStore();

  return (
    // TODO: find a better way to avoid this being hidden by the search bar
    <View style={{ marginTop: 20, display: "flex" }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ padding: 8 }}
      >
        {Object.values(categories).map(({ icon, id, label }) => (
          <Link
            key={id}
            href={"/tasks"}
            onPress={() => setCategoryIdFilter(id)}
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
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Icon {...icon} size={64} />
                <Text style={{ textAlign: "center", marginTop: 8 }}>
                  {label}
                </Text>
              </View>
            </Button>
          </Link>
        ))}
      </ScrollView>

      <Tabs defaultValue="due-today" enableSwipe={false}>
        <TabsList>
          <TabsTrigger
            // TODO: find better way to grow the tabs
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
        <ScrollView style={{ marginVertical: 8 }}>
          <TabsContent
            value="due-today"
            style={{
              gap: 20,
            }}
          >
            {tasks.map((t) => (
              <TaskCard task={t} key={t.id} />
            ))}
          </TabsContent>
          <ScrollView style={{ marginVertical: 8 }}>
            <TabsContent
              value="overdue"
              style={{
                gap: 20,
              }}
            >
              {tasks.map((t) => (
                <TaskCard task={t} key={t.id} />
              ))}
            </TabsContent>
          </ScrollView>
        </ScrollView>
      </Tabs>
    </View>
  );
};

export default HomeScreen;
