import { BottomSheet, useBottomSheet } from "@/components/ui/bottom-sheet";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { View } from "@/components/ui/view";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ListTodo, Plus } from "lucide-react-native";
import React from "react";

const AddTaskBottomSheet = () => {
  const { isVisible, open, close } = useBottomSheet();
  const backgroundColor = useThemeColor({}, "accent");

  return (
    <View>
      <Button
        onPress={open}
        style={{
          position: "absolute",
          bottom: 80,
          right: 20,
          height: 70,
          width: 70,
          backgroundColor,
        }}
      >
        <Icon name={Plus} size={32} />
      </Button>

      <BottomSheet
        isVisible={isVisible}
        onClose={close}
        title="Add Task"
        snapPoints={[0.9, 0.5]}
        enableBackdropDismiss={false}
      >
        <Input
          label="Task"
          icon={ListTodo}
          placeholder="Enter the title of your task"
          containerStyle={{
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 40,
            marginVertical: 20,
          }}
        />

        <Button onPress={close}>Add Task</Button>
      </BottomSheet>
    </View>
  );
};

export default AddTaskBottomSheet;
