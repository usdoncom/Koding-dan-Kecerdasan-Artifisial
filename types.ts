import { LucideIcon } from "lucide-react";

export interface NavItem {
  name: string;
  path: string;
  icon?: LucideIcon;
}

export interface BasicCard {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface ProblemItem {
  id: number;
  title: string;
  cause: string;
  solution: string;
  tip: string;
}

export interface ContentCard {
  id: number;
  title: string;
  category: string;
  description: string;
}

export interface RoadmapDay {
  day: number;
  phase: string;
  task: string;
  note: string;
}

export interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
}

export interface User {
  name: string;
  phone: string;
  password?: string;
}

export interface AuthContextType {
  user: User | null;
  login: (phone: string, password: string) => boolean;
  register: (user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}