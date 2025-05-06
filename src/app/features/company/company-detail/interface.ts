export interface CompanyDetailReqDTO {
  title: string;
  description:string;
}
export interface CompanyDetailResDTO {
  id: number;
  title: string;
  description:string;
}
export interface CompanyDetail extends CompanyDetailReqDTO {
  id: number;
}
