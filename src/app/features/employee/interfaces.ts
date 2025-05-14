export interface EmployeeReqDTO {
  username: string;
  email: string;
  emCode: string;
  password: string;
  role: string | null;
}
export interface EmployeeResDTO {
  id: number;
  username: string;
  email: string;
  emCode: string;
  password: string;
  role: string | null;
}
export interface Employee extends EmployeeReqDTO {
  id: number;
}
