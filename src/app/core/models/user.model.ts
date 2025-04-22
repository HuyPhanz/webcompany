export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}
export interface LoginRes {
  role: string;
  token: string;
}
