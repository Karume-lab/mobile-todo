import { Category, CategoryValues } from "@/src/lib/types";
import {
  BriefcaseBusiness,
  GraduationCap,
  Heart,
  MoreHorizontal,
} from "lucide-react-native";

export const categories: Record<CategoryValues, Category> = {
  work: {
    id: "1",
    icon: {
      name: BriefcaseBusiness,
      color: "#1976D2",
    },
    label: "Work",
  },
  life: {
    id: "2",
    icon: {
      name: Heart,
      color: "#E91E63",
    },
    label: "Life",
  },
  school: {
    id: "3",
    icon: {
      name: GraduationCap,
      color: "#FBC02D",
    },
    label: "School",
  },
  other: {
    id: "4",
    icon: {
      name: MoreHorizontal,
      color: "#9E9E9E",
    },
    label: "Other",
  },
};
