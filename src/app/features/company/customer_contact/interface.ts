export interface CustomerContactReqDTO {
  name: string;
  email: string;
  phone: string;
  message: string;
  status: string;
}
export interface CustomerContactResDTO {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: string;
  createdDate: string;
}
export interface CustomerContact extends CustomerContactReqDTO {
  id: number;
}
