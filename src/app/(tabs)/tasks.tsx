import { Text } from "@/src/components/ui/text";
import { View } from "@/src/components/ui/view";
import { useLocalSearchParams } from "expo-router";
import React from "react";

const TasksScreen = () => {
  const { categoryId } = useLocalSearchParams<{ categoryId: string }>();

  console.log(categoryId);

  return (
    <View>
      <Text>TasksScreen</Text>
    </View>
  );
};

export default TasksScreen;
