import { Card, CardContent } from "@/src/components/ui/card";
import { Checkbox } from "@/src/components/ui/checkbox";
import { Icon } from "@/src/components/ui/icon";
import { Text } from "@/src/components/ui/text";
import { Task } from "@/src/lib/types";
import { useTasksStore } from "@/src/store/tasks";
import React from "react";
import { View } from "react-native";

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { toggleTaskIsCompleted } = useTasksStore();

  return (
    <Card
      key={task.id}
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        borderRadius: 12,
        gap: 12,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Checkbox
          checked={!!task.isCompleted}
          onCheckedChange={() => toggleTaskIsCompleted(task.id)}
        />
        <View>
          <Text
            style={{
              fontWeight: "600",
              textDecorationLine: task.isCompleted ? "line-through" : "none",
            }}
          >
            {task.title}
          </Text>
          {task.description && (
            <Text style={{ fontSize: 12, color: "#888" }}>
              {task.description}
            </Text>
          )}
        </View>
      </View>

      {task.dueDate && (
        <CardContent style={{ alignItems: "flex-end" }}>
          <Icon {...task.category.icon} size={20} />
          <Text style={{ fontSize: 12, color: "#888" }}>{task.dueDate}</Text>
        </CardContent>
      )}
    </Card>
  );
};

export default TaskCard;
