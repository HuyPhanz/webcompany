export interface EmployeeReqDTO {
  username: string;
  password: string;
  email: string;
  emCode: string;
  role: string | null;
}
export interface EmployeeResDTO {
  id: number;
  username: string;
  password: string;
  email: string;
  emCode: string;
  role: string | null;
}
export interface Employee extends EmployeeReqDTO {
  id: number;
}
