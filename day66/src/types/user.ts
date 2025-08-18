export type User = {
  id: number;
  name: string;
  email: string;
  role: "FULL" | "FRONT" | "BACK";
  isActive: boolean;
}