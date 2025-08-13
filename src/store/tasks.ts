import { tasks } from "@/src/lib/data/tasks";
import { Task } from "@/src/lib/types";
import { create } from "zustand";

interface TaskStates {
  tasks: Task[];
  categoryIdFilter: string;
  searchFilter: string;
}

interface TaskActions {
  addTask: (task: Task) => void;
  editTask: (task: Task) => void;
  deleteTask: (taskId: string) => void;
  toggleTaskIsCompleted: (taskId: string) => void;
  setSearchFitler: (searchQuery: string) => void;
  setCategoryIdFilter: (categoryId: string) => void;
}

export const useTasksStore = create<TaskStates & TaskActions>((set, get) => ({
  tasks: tasks,
  searchFilter: "",
  categoryIdFilter: "",
  addTask: (task) => {
    set({ tasks: [...get().tasks, task] });
  },
  //   TODO: implement the rest of these actions
  editTask: (task) => {
    set({ tasks: [...get().tasks, task] });
  },
  deleteTask: (taskId) => {
    set({ tasks: get().tasks.filter((task) => task.id !== taskId) });
  },
  toggleTaskIsCompleted: (taskId) => {
    set({
      tasks: get().tasks.map((t) =>
        t.id === taskId ? { ...t, isCompleted: !t.isCompleted } : t
      ),
    });
  },
  setSearchFitler: (searchQuery) => {
    set({ tasks: get().tasks.filter((task) => task.title === searchQuery) });
  },
  setCategoryIdFilter: (categoryId) => {
    set({
      tasks: get().tasks.filter((task) => task.category?.id === categoryId),
    });
  },
}));
