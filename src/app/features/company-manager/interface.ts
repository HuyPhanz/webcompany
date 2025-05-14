export interface SupportReqDTO {
  title: string;
  description: string;
  icon:string;

}
export interface SupportResDTO {
  id: number;
  title: string;
  description: string;
  icon:string;
}
export interface Support extends SupportReqDTO {
  id: number;
}

