import { LucideProps } from "lucide-react-native";

export interface Task {
  id: string;
  title: string;
  description?: string;
  dueDate?: string;
  category: Category;
  isCompleted?: boolean;
}

export interface Category {
  id: string;
  icon: {
    name: React.ComponentType<LucideProps>;
    color: string;
  };
  label: string;
}

export type CategoryValues = "school" | "work" | "life" | "other";
