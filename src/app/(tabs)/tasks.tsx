import TaskCard from "@/src/components/core/TaskCard";
import { Text } from "@/src/components/ui/text";
import { View } from "@/src/components/ui/view";
import { useTasksStore } from "@/src/store/tasks";
import React from "react";

const TasksScreen = () => {
  const { tasks } = useTasksStore();

  return (
    <View>
      {!!tasks.length ? (
        tasks.map((t) => <TaskCard task={t} key={t.id} />)
      ) : (
        <Text>No tasks</Text>
      )}
    </View>
  );
};

export default TasksScreen;
