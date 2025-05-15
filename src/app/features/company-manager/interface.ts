export interface ManagerReqDTO {
  name: string;
  position: string;
  description: string;
  image:string;
  orderIndex: number;

}
export interface ManagerResDTO {
  id: number;
  name: string;
  position: string;
  description: string;
  image:string;
  orderIndex: number;
}
export interface Manager extends ManagerReqDTO {
  id: number;
}

