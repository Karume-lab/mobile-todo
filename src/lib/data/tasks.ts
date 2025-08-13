import { categories } from "@/src/lib/data/categories";

export const tasks = [
  {
    id: "1",
    title: "Buy groceries",
    description: "Milk, eggs, bread, and coffee",
    dueDate: "2025-08-13",
    category: categories.life,
    isCompleted: false,
  },
  {
    id: "2",
    title: "Finish project proposal",
    description: "Finalize slides and send to the client",
    dueDate: "2025-08-15",
    category: categories.work,
    isCompleted: false,
  },
  {
    id: "3",
    title: "Morning yoga session",
    description: "15 minutes meditation, 30 minutes stretching",
    dueDate: "2025-08-14",
    category: categories.other,
    isCompleted: true,
  },
  {
    id: "4",
    title: "Plan weekend hiking trip",
    description: "Check weather and invite friends",
    category: categories.other,
    isCompleted: false,
  },
  {
    id: "5",
    title: "Read chapter from 'Atomic Habits'",
    dueDate: "2025-08-16",
    category: categories.other,
    isCompleted: false,
  },
];
