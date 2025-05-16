export interface EmployeeReqDTO {
  username: string;
  email: string;
  emCode: string;
  password: string;
}
export interface EmployeeResDTO {
  id: number;
  username: string;
  email: string;
  emCode: string;
  password: string;
}
export interface Employee extends EmployeeReqDTO {
  id: number;
}
