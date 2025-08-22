export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  pw: string;
}

export type UserProfile = Omit<User, "pw">;